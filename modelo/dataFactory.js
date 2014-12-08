var modelo = require('./baseSync.js');


//----organizador---------------------
modelo.insertRol(1,"organizador").success(function(){

modelo.insertFuncion("organizador","organizador").success(function(){
    modelo.asignarRolFuncion(1,"organizador");
});

modelo.insertFuncion("regConferencia","registro de conferencias").success(function(){
    modelo.asignarRolFuncion(1,"regConferencia");
});
modelo.insertFuncion("regParticipante","registro de participantes").success(function(){
    modelo.asignarRolFuncion(1,"regParticipante");
});
modelo.insertFuncion("regOrganizador","registro de organizadores").success(function(){
    modelo.asignarRolFuncion(1,"regOrganizador");
});
modelo.insertFuncion("regExpositor","registro de expositores").success(function(){
    modelo.asignarRolFuncion(1,"regExpositor");
});

});


modelo.insertarUI("organizador","interfaz organizador").success(function(){
    modelo.asignarFuncionUI("organizador","organizador");
});
modelo.insertarUI("/regconf","interfaz para registrar conferencias").success(function(){
    modelo.asignarFuncionUI("regConferencia","/regconf");
});
modelo.insertarUI("/regex","interfaz para registrar expositores").success(function(){
    modelo.asignarFuncionUI("regExpositor","/regex");
});
modelo.insertarUI("/regorg","interfaz para registrar organizadores").success(function(){
    modelo.asignarFuncionUI("regOrganizador","/regorg");
});
modelo.insertarUI("/regpart","interfaz para registrar participantes").success(function(){
    modelo.asignarFuncionUI("regParticipante","/regpart");
});




//-----participante--------------------
modelo.insertRol(3,"participante").success(function(){

modelo.insertFuncion("participante","participante").success(function(){
    modelo.asignarRolFuncion(3,"participante");
});
modelo.insertFuncion("estadoInscripcion","estado de inscripcion del participante").success(function(){
    modelo.asignarRolFuncion(3,"estadoInscripcion");
});
modelo.insertFuncion("inscribirseConf","inscripcion a conferencia").success(function(){
    modelo.asignarRolFuncion(3,"inscribirseConf");
});
modelo.insertFuncion("eliminarInscrp","eliminar inscripcion").success(function(){
    modelo.asignarRolFuncion(3,"eliminarInscrp");
});

});


modelo.insertarUI("participante","interfaz participante").success(function(){
    modelo.asignarFuncionUI("participante","participante");
});
modelo.insertarUI("/estado_inscripcion","interfaz para ver estado de inscripcion del participante").success(function(){
    modelo.asignarFuncionUI("estadoInscripcion","/estado_inscripcion");
});
modelo.insertarUI("/inscribirse_conf","interfaz para inscribir participantes a conferencias").success(function(){
    modelo.asignarFuncionUI("inscribirseConf","/inscribirse_conf");
});
modelo.insertarUI("/eliminar_inscripcion","interfaz para eliminar inscripcion a conferencia").success(function(){
    modelo.asignarFuncionUI("eliminarInscrp","/eliminar_inscripcion");
});


//-----expositor-----------------------
modelo.insertRol(2,"expositor").success(function(){

modelo.insertFuncion("expositor","expositor").success(function(){
    modelo.asignarRolFuncion(2,"expositor");
});
modelo.insertFuncion("verConferencias","ver conferencias dictadas por un expositor").success(function(){
    modelo.asignarRolFuncion(2,"verConferencias");
});
modelo.insertFuncion("verCronograma","ver cronograma").success(function(){
    modelo.asignarRolFuncion(2,"verCronograma");
});

});


modelo.insertarUI("expositor","interfaz expositor").success(function(){
    modelo.asignarFuncionUI("expositor","expositor");
});
modelo.insertarUI("/ver_conferencias","interfaz para ver conferencias dictadas por un expositor").success(function(){
    modelo.asignarFuncionUI("verConferencias","/ver_conferencias");
});
modelo.insertarUI("/ver_cronograma","interfaz para ver cronograma").success(function(){
    modelo.asignarFuncionUI("verCronograma","/ver_cronograma");
});
