var modelo = require("./base.js");

//----organizador---------------------
modelo.insertRol(1,"organizador");
modelo.insertFuncion("organizador","organizador");
modelo.insertFuncion("regConferencia","registro de conferencias");
modelo.insertFuncion("regParticipante","registro de participantes");
modelo.insertFuncion("regOrganizador","registro de organizadores");
modelo.insertFuncion("regExpositor","registro de expositores");

modelo.insertarUI("organizador","interfaz organizador");
modelo.insertarUI("/regconf","interfaz para registrar conferencias");
modelo.insertarUI("/regex","interfaz para registrar expositores");
modelo.insertarUI("/regorg","interfaz para registrar organizadores");
modelo.insertarUI("/regpart","interfaz para registrar participantes");

//-----participante--------------------
modelo.insertRol(3,"participante");
modelo.insertFuncion("participante","participante");
modelo.insertFuncion("estadoInscripcion","estado de inscripcion del participante");
modelo.insertFuncion("inscribirseConf","inscripcion a conferencia");
modelo.insertFuncion("eliminarInscrp","eliminar inscripcion");

modelo.insertarUI("participante","interfaz participante");
modelo.insertarUI("/estado_inscripcion","interfaz para ver estado de inscripcion del participante");
modelo.insertarUI("/inscribirse_conf","interfaz para inscribir participantes a conferencias");
modelo.insertarUI("/eliminar_inscripcion","interfaz para eliminar inscripcion a conferencia");

//-----expositor-----------------------
modelo.insertRol(2,"expositor");
modelo.insertFuncion("expositor","expositor");
modelo.insertFuncion("verConferencias","ver conferencias dictadas por un expositor");
modelo.insertFuncion("verCronograma","ver cronograma");

modelo.insertarUI("expositor","interfaz expositor");
modelo.insertarUI("/ver_conferencias","interfaz para ver conferencias dictadas por un expositor");
modelo.insertarUI("/ver_cronograma","interfaz para ver cronograma");
