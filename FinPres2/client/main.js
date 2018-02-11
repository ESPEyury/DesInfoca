
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import * as searchTest from './template/search/searchTest.js';
import * as checkServicesTest from './template/clientsManagement/checkServicesTest.js';
import * as searchMechanicsTest from './template/searchMechanics/searchMechanicsTest.js';
import * as test_login from "./template/layout/layoutTest.js";
import * as test_cedula from "./template/mechanicsManagement/mechanicsTest.js";
import * as manageServicesTest from "./template/mechanicServicesManagement/manageServicesTest.js";
Meteor.startup(()=>{

  //Unit Testing
 -    //  ----++++==== 87  ====++++----  \\
 -
 -    console.log("Search Test");
 -    searchTest.TestSearchBanana();
 -    searchTest.TestSearchEmpty();
 -    searchTest.TestSearchServicio();
 -    searchTest.TestSearchNumbers();
 -    searchTest.TestSearchNegativeNumbers();
 -    searchTest.TestSearchZero();
 -    searchTest.TestSearchAlphanumeric();
 -    searchTest.TestSearchNegativeLetters();
 -    searchTest.TestSearchAlphanumeric();
 -    searchTest.TestSearchMecanica();

 -    console.log("Search Mechanics Test")
 -    searchMechanicsTest.TestSearchMechanicBanana();
 -    searchMechanicsTest.TestSearchMechanicNegatives();
 -    searchMechanicsTest. TestSearchMechanicNumbers();
 -    searchMechanicsTest.TestSearchMechanicLavado();
 -    searchMechanicsTest.TestSearchMechanicEmpty();
 -    searchMechanicsTest.TestSearchMechanicJhonBox();
 -    searchMechanicsTest.TestSearchMechanicNegative();
 -    searchMechanicsTest.TestSearchMechanicNegativeLetters();
 -    searchMechanicsTest.TestSearchMechanicOffnum();
 -    searchMechanicsTest.TestSearchMechanicSymbols();
 -
 -    console.log("Login Test ");
 -    test_login.control_login_test_Mecanico();
 -    test_login.control_login_test_Administrador();
 -    test_login.control_login_test_usuarioNormal();
 -    test_login.control_login_test_SinUsuario();
 -    test_login.control_login_test_Admin_minuscula();
 -    test_login.control_login_test_cedula_negativa();
 -    test_login.control_login_test_cedula_caracter();
 -    test_login.control_login_test_cedula_caracter_final();
 -    test_login.control_login_test_admin_inicio();
 -    test_login.control_login_test_admin_final();
 -    test_login.control_login_test_entero_positivo_grande();
 -
 -
 -    console.log("C.I Validation Test");
 -    test_cedula.validarcedula_test_valida();
 -    test_cedula.validarcedula_test_incompleta();
 -    test_cedula.validarcedula_test_mayor_a_10digitos();
 -    test_cedula.validarcedula_test_negativa();
 -    test_cedula.validarcedula_test_caracter();
 -    test_cedula.validarcedula_test_caracteres();
 -    test_cedula.validarcedula_test_vacia();
 -    test_cedula.validarcedula_test_pichincha();
 -    test_cedula.validarcedula_test_imbabura();
 -    test_cedula.validarcedula_test_imbabura_novalida();
 -    test_cedula.validarcedula_test_carchi();
 -    test_cedula.validarcedula_test_manabi();
 -    test_cedula.validarcedula_test_napo();
 -    test_cedula.validarcedula_test_azuay();
 -    test_cedula.validarcedula_test_loja();
 -    test_cedula.validarcedula_test_chimborazo();
 -    test_cedula.validarcedula_test_guayas();
 -    test_cedula.validarcedula_test_eloro();
 -    test_cedula.validarcedula_test_orellana();
 -    test_cedula.validarcedula_test_losrios();
 -    test_cedula.validarcedula_test_pastaza();
 -    test_cedula.validarcedula_test_cotopaxi();
 -    test_cedula.validarcedula_test_stodomingo();
 -    test_cedula.validarcedula_test_canar();
 -    test_cedula.validarcedula_test_tungurahua();
 -    test_cedula.validarcedula_test_staelena();
 -    test_cedula.validarcedula_test_zamora();
 -    test_cedula.validarcedula_test_bolivar();
 -    test_cedula.validarcedula_test_morona();
 -    test_cedula.validarcedula_test_esmeraldas();
 -    test_cedula.validarcedula_test_galapagos();
 -    test_cedula.validarcedula_test_sucumbios();
 -    test_cedula.validarcedula_test_valida2();
 -    test_cedula.validarcedula_test_incompleta_3digitos();
 -    test_cedula.validarcedula_test_mayor_a_15digitos();
 -    test_cedula.validarcedula_test_mayor_a_20digitos();
 -    test_cedula.validarcedula_test_negativa_invalida();
 -    test_cedula.validarcedula_test_caracter_especial();
 -    test_cedula.validarcedula_test_caracter_especial_operacion();
 -    test_cedula.validarcedula_test_caracteres_alternados();
 -    test_cedula.validarcedula_test_sin_numeros();
 -    test_cedula.validarcedula_test_otros_caracteres();
 -
 -
 -
 -    console.log(" Revision Mechanics Services Test");
 -    checkServicesTest.TestRevBananaOso();
 -    checkServicesTest.TestRevMarceloLavTires();
 -    checkServicesTest.TestRevSOSLavTires();
 -    checkServicesTest.TestRevSOSLavCoche();
 -    checkServicesTest.TestRevSOSNumbers();
 -    checkServicesTest.TestRev123Service();
 -    checkServicesTest.TestRevNegativeLetters();
 -
 -    console.log(" Mechanics Services Test");
 -    manageServicesTest.testDataNormal();
 -    manageServicesTest.testNumbersInDescription();
 -    manageServicesTest.testNumbersInCost();
 -    manageServicesTest.testNumbersInServiceType();
 -    manageServicesTest.testNumbersInBranch();
 -    manageServicesTest.testNegativeNumbersInCost();
 -    manageServicesTest.testLettersInCost();
 -    manageServicesTest.testNumbersInAll();
 -    manageServicesTest.testCeroNegativoEnTodo();
 -    manageServicesTest.testValidateNumbers();
 -    manageServicesTest.testValidateNumbersAndLetters();
 -    manageServicesTest.testValidateNegativeNumbers();
 -    manageServicesTest.testValidateOnlyLetters();
 -    manageServicesTest.testValidateDecimalNumbers();
 -    manageServicesTest.testvalidarZero();
 -    manageServicesTest.testValidateSimbols();
 -    manageServicesTest.testValidateMediumNumbers();
 -    manageServicesTest.testValidateNegativeLetters();
 -
 -
 -
 -    console.log("CARGANDO VALORES DE LA SESION");
 -    UserG="";
 -    TipoUserG="";
 -    Busqueda="";
 -    Mecanica="";
 -    Selection="";
 -    Ruta="";
 -    if(Meteor.user()!=null){
 -      UserG=Meteor.user().username;
 -      if(isNaN(UserG)==false){
 -          console.log("logeado como mecanico");
 -          TipoUserG= "/MecanicServ";
 -          Mecanica=Mechanics.findOne({"cedu": {$regex: ".*" + UserG + ".*"}}).nomMe;
 -          console.log('Asociado a la mecanica: '+Mecanica);
 -          //Router.go('/MecanicServ');
 -      }else{
 -        if(UserG.includes("ADMIN")){
 -          console.log('logeado como admin');
 -          TipoUserG=  'admin';
 -          TipoUserG= "/GesAdmin";
 -          var ref="{{pathFor 'mainServices'}}";
 -          //Router.go('/GesAdmin');
 -        }else{
 -          console.log('logeado como usuario');
 -          TipoUserG= 'usuario';
 -          TipoUserG="/GesUser";
 -          var ref="{{pathFor 'mainServices'}}";
 -        }
 -    }
 -  }else{
 -    console.log("No hay una sesion guardada, Inicia sesion por favor");
 -  }
 -  },1000);
 -


});
