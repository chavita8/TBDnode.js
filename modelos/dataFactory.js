var modelo = require('./baseSync.js');


//----organizador---------------------
modelo.insertRol(1,"organizador");

modelo.insertFuncion("organizador","organizador");
modelo.insertFuncion("regConferencia","registro de conferencias");
modelo.insertFuncion("regParticipante","registro de participantes");
modelo.insertFuncion("regOrganizador","registro de organizadores");
modelo.insertFuncion("regExpositor","registro de expositores");

modelo.asignarRolFuncion(1,"organizador");
modelo.asignarRolFuncion(1,"regExpositor");
modelo.asignarRolFuncion(1,"regOrganizador");
modelo.asignarRolFuncion(1,"regParticipante");
modelo.asignarRolFuncion(1,"regConferencia");

modelo.insertarUI("organizador","interfaz organizador");
modelo.insertarUI("/regconf","interfaz para registrar conferencias");
modelo.insertarUI("/regex","interfaz para registrar expositores");
modelo.insertarUI("/regorg","interfaz para registrar organizadores");
modelo.insertarUI("/regpart","interfaz para registrar participantes");

modelo.asignarFuncionUI("organizador","organizador");
modelo.asignarFuncionUI("regExpositor","/regex");
modelo.asignarFuncionUI("regOrganizador","/regorg");
modelo.asignarFuncionUI("regParticipante","/regpart");
modelo.asignarFuncionUI("regConferencia","/regconf");

//-----participante--------------------
modelo.insertRol(3,"participante");

modelo.insertFuncion("participante","participante");
modelo.insertFuncion("estadoInscripcion","estado de inscripcion del participante");
modelo.insertFuncion("inscribirseConf","inscripcion a conferencia");
modelo.insertFuncion("eliminarInscrp","eliminar inscripcion");

modelo.asignarRolFuncion(3,"participante");
modelo.asignarRolFuncion(3,"estadoInscripcion");
modelo.asignarRolFuncion(3,"inscribirseConf");
modelo.asignarRolFuncion(3,"eliminarInscrp");

modelo.insertarUI("participante","interfaz participante");
modelo.insertarUI("/estado_inscripcion","interfaz para ver estado de inscripcion del participante");
modelo.insertarUI("/inscribirse_conf","interfaz para inscribir participantes a conferencias");
modelo.insertarUI("/eliminar_inscripcion","interfaz para eliminar inscripcion a conferencia");

modelo.asignarFuncionUI("participante","participante");
modelo.asignarFuncionUI("estadoInscripcion","/estado_inscripcion");
modelo.asignarFuncionUI("inscribirseConf","/inscribirse_conf");
modelo.asignarFuncionUI("eliminarInscrp","/eliminar_inscripcion");

//-----expositor-----------------------
modelo.insertRol(2,"expositor");

modelo.insertFuncion("expositor","expositor");
modelo.insertFuncion("verConferencias","ver conferencias dictadas por un expositor");
modelo.insertFuncion("verCronograma","ver cronograma");

modelo.asignarRolFuncion(2,"expositor");
modelo.asignarRolFuncion(2,"verConferencias");
modelo.asignarRolFuncion(2,"verCronograma");

modelo.insertarUI("expositor","interfaz expositor");
modelo.insertarUI("/ver_conferencias","interfaz para ver conferencias dictadas por un expositor");
modelo.insertarUI("/ver_cronograma","interfaz para ver cronograma");

modelo.asignarFuncionUI("expositor","expositor");
modelo.asignarFuncionUI("verConferencias","/ver_conferencias");
modelo.asignarFuncionUI("verCronograma","/ver_cronograma");
