var modelo = require("./base.js");

//----organizador---------------------
modelo.asignarRolFuncion(1,"organizador");
modelo.asignarRolFuncion(1,"regExpositor");
modelo.asignarRolFuncion(1,"regOrganizador");
modelo.asignarRolFuncion(1,"regParticipante");
modelo.asignarRolFuncion(1,"regConferencia");

modelo.asignarFuncionUI("organizador","organizador");
modelo.asignarFuncionUI("regExpositor","/regex");
modelo.asignarFuncionUI("regOrganizador","/regorg");
modelo.asignarFuncionUI("regParticipante","/regpart");
modelo.asignarFuncionUI("regConferencia","/regconf");
//-----participante--------------------
modelo.asignarRolFuncion(3,"participante");
modelo.asignarRolFuncion(3,"estadoInscripcion");
modelo.asignarRolFuncion(3,"inscribirseConf");
modelo.asignarRolFuncion(3,"eliminarInscrp");

modelo.asignarFuncionUI("participante","participante");
modelo.asignarFuncionUI("estadoInscripcion","/estado_inscripcion");
modelo.asignarFuncionUI("inscribirseConf","/inscribirse_conf");
modelo.asignarFuncionUI("eliminarInscrp","/eliminar_inscripcion");

//-----expositor-----------------------
modelo.asignarRolFuncion(2,"expositor");
modelo.asignarRolFuncion(2,"verConferencias");
modelo.asignarRolFuncion(2,"verCronograma");

modelo.asignarFuncionUI("expositor","expositor");
modelo.asignarFuncionUI("verConferencias","/ver_conferencias");
modelo.asignarFuncionUI("verCronograma","/ver_cronograma");
