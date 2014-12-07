//------- CONFIGURACION DE LA CONECCION A LA BASE DE DATOS--------------//
var Sequelize = require("sequelize");

var myBase = new Sequelize("nodeSystem","nodeSystem","node",{
  dialect: "postgres",
  host: "ultra",
  port: 5432,
  define:{
    timestamps:false,
    freezeTableName:true
  }
});


myBase.authenticate();

//------ MODELADO DE LA BASE DE DATOS ---------------------------//

var usuario, usuarioRol, rol, funcion, rolFuncion, ui, funcionUI, participante, expositor, organizador,
conferencia, inscripcion;

usuario = myBase.define("usuario",{
    user: {
      type: Sequelize.TEXT,
      primaryKey: true,
      //unique: true
    },
    password: Sequelize.TEXT,
},{
  tableName: "usuario"
});

participante = myBase.define("participante",{
  ci: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    unique: true
  },
  usuario_user: {
    type: Sequelize.TEXT,
    references: usuario,
    referencesKey: "user",
    primaryKey: true,
    unique: true
  },
  nombre: Sequelize.TEXT,
  apellido: Sequelize.TEXT,
  correo: Sequelize.TEXT

},{
  tableName: "participante"
});

expositor = myBase.define("expositor",{
  ci: {
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  usuario_user: {
    type: Sequelize.TEXT,
    primaryKey: true,
    references: usuario,
    referencesKey: "user"
  },
  nombre: Sequelize.TEXT,
  apellido: Sequelize.TEXT,
  correo: Sequelize.TEXT,
  tema: Sequelize.TEXT
},{
  tableName: "expositor"
});

organizador = myBase.define("organizador",{
  ci: {
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  usuario_user: {
    type: Sequelize.TEXT,
    primaryKey: true,
    references: usuario,
    referencesKey: "user"
  },
  nombre: Sequelize.TEXT,
  apellido: Sequelize.TEXT,
  correo: Sequelize.TEXT
},{
  tableName: "organizador"
});

rol = myBase.define("rol",{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },

  nombre: Sequelize.TEXT

},{
  tableName: "rol"
});


usuarioRol = myBase.define("usuarioRol",{
  usuario_user: {
    type: Sequelize.TEXT,
    references: usuario,
    referencesKey: "user",
    primaryKey: true
  },

  rol_id: {
    type: Sequelize.INTEGER,
    references: rol,
    referencesKey: "id",
    primaryKey: true
  }

},{
  tableName: "usuario_rol"
});

funcion = myBase.define("funcion",{
  nombre: {
    primaryKey: true,
    type: Sequelize.TEXT
  },
  descripcion: Sequelize.TEXT

},{
  tableName: "funcion"
});

rolFuncion = myBase.define("rolFuncion",{
  funcion_nombre: {
    primaryKey: true,
    type: Sequelize.TEXT,
    references: funcion,
    referencesKey: "nombre"
  },
  rol_id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    references: rol,
    referencesKey: "id"
  }
},{
  tableName: "rol_funcion"
});

ui = myBase.define("ui",{
  nombre: {
    primaryKey: true,
    type: Sequelize.TEXT
  },
  descripcion: Sequelize.TEXT

},{
  tableName: "ui"
});

funcionUI = myBase.define("funcionUI",{
  funcion_nombre: {
    primaryKey: true,
    type: Sequelize.TEXT,
    references: funcion,
    referencesKey: "nombre"
  },

  ui_nombre: {
    primaryKey: true,
    type: Sequelize.TEXT,
    references: ui,
    referencesKey: "nombre"
  }

},{
  tableName: "funcion_ui"
});


conferencia = myBase.define("conferencia",{
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true
  },
  nombre: Sequelize.TEXT
},{
  tableName: "conferencia"
});

inscripcion = myBase.define("inscripcion",{
  id:{
    primaryKey: true,
    autoIncrement: true,
    type: Sequelize.INTEGER
  },
  participante_ci:{
    primaryKey: true,
    references: participante,
    referencesKey: "ci",
    type: Sequelize.INTEGER
  },
  participante_usuario_user: {
    primaryKey: true,
    references: participante,
    referencesKey: "usuario_user",
    type: Sequelize.TEXT
  },
  conferencia_id: {
    primaryKey: true,
    references: conferencia,
    referencesKey: "id",
    type: Sequelize.INTEGER
  },
  fecha: Sequelize.DATE
},{
  tableName: "inscripcion"
});


/*
//------RELACIONES
//---1-1

usuario.hasOne(participante,{
  foreignKey: "usuario_user",
  as: "participante"
});

participante.hasOne(usuario,{
  foreignKey: "usuario_user",
  as:"usuario"
});

usuario.hasOne(expositor,{
  foreignKey: "usuario_user",
  as: "expositor"
});

expositor.hasOne(usuario,{
  foreignKey: "usuario_user",
  as:"usuario"
});

usuario.hasOne(organizador,{
  foreignKey: "usuario_user",
  as: "organizador"
});

organizador.hasOne(usuario,{
  foreignKey: "usuario_user",
  as:"usuario"
});

//-------1-N--------------------

usuario.hasMany(usuarioRol,{
  foreignKey: "usuario_user",
  as: "usuario_rol"
});

rol.hasMany(usuarioRol,{
  foreignKey: "rol_id",
  as: "usuario_rol"
});

rol.hasMany(rolFuncion,{
  foreignKey: "rol_id",
  as: "rol_funcion"
});

funcion.hasMany(rolFuncion,{
  foreignKey: "funcion_nombre",
  as: "rol_funcion"
});

/*
participante.hasMany(inscripcion,{
  foreignKey: "participante_ci",
  as: "inscripcion"
});*/

//--------N-1----------------------

/*
usuarioRol.belongsTo(usuario,{
  foreignKey: "usuario_user",
  as: "usuario"
});

usuarioRol.belongsTo(rol,{
  foreignKey: "rol_id",
  as: "rol"
});

rolFuncion.belongsTo(rol,{
  foreignKey: "rol_id",
  as: "rol"
});

rolFuncion.belongsTo(funcion,{
  foreignKey: "funcion_nombre",
  as: "funcion"
});

funcionUI.belongsTo(ui,{
  foreignKey: "ui_nombre",
  as: "ui"
});

funcionUI.belongsTo(funcion,{
  foreignKey: "funcion_nombre",
  as: "funcion"
});

*/


myBase.sync({
  force: true
}); //creamos las tablas a partir de nuestro modelo


//Funciones de insercion en las tablas

var insertRol = function(idU,nombreRol){
  var insert = rol.build({
    id: idU,
    nombre: nombreRol

  });

  insert.save();
};

var asignarUserRol = function(user, rolId){
  var insertUserRol = usuarioRol.build({
    usuario_user: user,
    rol_id: rolId,
  });

  insertUserRol.save();
};

var insertUser = function(nombreUsuario, pass){
  var insert = usuario.build({
    user: nombreUsuario,
    password: pass,
  });

  insert.save()
};

var insertFuncion = function(nombreFuncion, desc){
  var insert = funcion.build({
    nombre: nombreFuncion,
    descripcion: desc

  });

  insert.save();
};

var asignarRolFuncion = function(rolId, nombreFuncion){
  var insertRolFuncion = rolFuncion.build({
    rol_id: rolId,
    funcion_nombre: nombreFuncion
  });

  insertRolFuncion.save();

};

var insertarUI = function(nombreUi,desc){
  var insertUI = ui.build({
    nombre: nombreUi,
    descripcion: desc
  })

  insertUI.save();

};

var asignarFuncionUI = function(funcion,ui){
  var insertFuncionUI = funcionUI.build({
    funcion_nombre: funcion,
    ui_nombre: ui
  });

  insertFuncionUI.save();

};




//exportamos nuestros modelos
module.exports.usuario = usuario;
module.exports.usuarioRol = usuarioRol;
module.exports.rol = rol;
module.exports.funcion = funcion;
module.exports.rolFuncion = rolFuncion;
module.exports.ui = ui;
module.exports.funcionUI = funcionUI;
module.exports.insertUser = insertUser;
module.exports.insertRol = insertRol;
module.exports.insertFuncion = insertFuncion;
module.exports.insertarUI = insertarUI;
module.exports.asignarFuncionUI = asignarFuncionUI;
module.exports.asignarRolFuncion = asignarRolFuncion;
module.exports.asignarUserRol = asignarUserRol;
