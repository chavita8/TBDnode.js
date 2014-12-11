var express = require('express');
var bodyParser = require("body-parser");
var modelo = require("./modelo/base.js");

var app = express();
app.set('views','./vista');
app.set('view engine','jade');
app.use(express.static(__dirname + '/vista'));

app.use(bodyParser.urlencoded({
  extended: false
}));


app.get('/',function(req,res){
  res.render('home',{
    title: 'Bienvenido'
  });
});

app.get('/register',function(req,res){
  res.render('register',{
    title: 'Registrar Cuenta'
  });

});

app.get('/login',function(req,res){
  res.render('login',{
    title: 'Ingresar'
  })
});

app.get('/participante',function(req,res){
  res.render('participante',{
    title: 'Participante'
  });
});

app.get('/organizador',function(req,res){
  res.render('organizador',{
    title: 'Organizador'
  });
});

app.get('/expositor',function(req,res){
  res.render('expositor',{
    title: 'Expositor'
  });
});

app.get('/regorg',function(req,res){
  res.render('regorg',{
    title: 'registrar organizador'
  })
})

app.get('/regex',function(req,res){
  res.render('regex',{
    title: 'registrar expositor'
  })
})

app.get('/regconf',function(req,res){
  res.render('regconf',{
    title: 'registrar conferencias'
  })
})

app.post("/regconf",function(req,res){
  var nombre = req.body.nombre;

  modelo.insertarConf(nombre);
  res.send("conferencia creada");
});

app.get('/inscripcion',function(req,res){
  res.render("inscripcion",{
    title: "inscripcion"
    confs: modelo.conferencia.findAll();
  })
})

app.post("/login",function(req,res){
  var username = req.body.user;
  var pass = req.body.password;

  modelo.usuario.find({
    where: {
      user: username
    },
    include:[{
      model: modelo.usuarioRol,
      as: "usuario_rol"
    }]
  }).success(function(usuario){
    if(usuario != null){
      var passwd = usuario.password;
      if(pass == passwd){
        var rolid = usuario.usuario_rol[0].rol_id;
        modelo.rol.find({
          where:{
            id: rolid
          },
          include:[{
            model: modelo.rolFuncion,
            as: "rol_funcion"
          }]
        }).success(function(rol){
          var funciones = rol.rol_funcion;
          var i = 0;
          var func = [];
          funciones.forEach(function(funcion){
            func[i++] = funcion.funcion_nombre;
          });

          var funcionui = [];
          var ui;

          func.forEach(function(nombreFuncion){
            modelo.funcionUI.find(nombreFuncion).success(function(funcionUI){
              //console.log("funcion: " + funcionUI.funcion_nombre + " ui: " + funcionUI.ui_nombre);
              ui.funcion = funcionUI.funcion_nombre;
              ui.vista = funcionUI.ui_nombre;
              funcionui.push(ui);
              /*
              funcionui.push({
                funcion: funcionUI.funcion_nombre,
                ui: funcionUI.ui_nombre
              });*/
            });
          });


          funcionui.forEach(function(funcionUI){
            console.log("funcion: " + funcionUI.funcion + " ui: " + funcionUI.ui);
          });


        });

      }else{
        res.send("password incorrecto");
      }


    }else{
        res.send("usuario no encontrado");
    }
  });

});

//prueba de captura de datos


app.post("/registerTest",function(req,res){
  var user = req.body.user;
  var password = req.body.password;
  var nombre = req.body.nombre;
  var ci = req.body.ci;
  var correo = req.body.email;

  res.send("usuario: "+ user + " password: " + password + " nombre: " + nombre + " ci: " + ci + " correo: " + correo );

});

//registro usuario participante

app.post("/register",function(req,res){
  var user = req.body.user;
  var password = req.body.password;
  var nombre = req.body.nombre;
  var ci = req.body.ci;
  var correo = req.body.email;

  modelo.insertUser(user,password).success(function(){
    modelo.insertParticipante(ci, user, nombre, correo);
    modelo.asignarUserRol(user, 3);
  });

  res.render("exito",{
    title: "exito",
    inicio: "/"
  });


});

app.post("/regorg",function(req,res){
  var user = req.body.user;
  var password = req.body.password;
  var nombre = req.body.nombre;
  var ci = req.body.ci;
  var correo = req.body.email;

  modelo.insertUser(user,password).success(function(){
    modelo.insertOrganizador(ci, user, nombre, correo);
    modelo.asignarUserRol(user, 1);
  });

  res.render("exito",{
    title: "exito",
    inicio: "/organizador"
  });

});

app.get("/exito",function(req,res){
  res.render("exito",{
    title: "exito!"
  });
});


function regRol(rol, usuario){

  var usuarioRol = {
    usuario_user: usuario,
    rol_id: 1,
    fecha: new Date()
  };

  if(rol == "participante"){
    usuarioRol.rol_id = 1;
  }

  if(rol == "organizador"){
    usuarioRol.rol_id = 2;
  }

  var userRol = modelo.usuarioRol.build(usuarioRol);

  userRol.save();

}


app.listen(8080);
