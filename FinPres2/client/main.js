
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import * as searchTest from './template/search/searchTest.js';
import * as revisarServiciosTest from './template/gestionClientes/revisarServiciosTest.js';
import * as searchMechanicsTest from './template/searchMechanics/searchMechanicsTest.js';
import * as test_login from "./template/layout/layout_test.js";
import * as test_cedula from "./template/gestionMecanicas/mecanicas_test.js";
import * as gestionarServiciosTest from "./template/gestionServMecanicas/gestionarServicios_test.js";
Meteor.startup(()=>{

  setTimeout(function(){
    //AQUI COLOCAR EL TOTAL DE PRUEBAS CADA VEZ QUE LO ACTUALICEN
    //  ----++++==== 87  ====++++----  \\

    console.log("PRUEBAS BUSQUEDA");
    searchTest.TestSearchBanana();
    searchTest.TestSearchEmpty();
    searchTest.TestSearchServicio();
    searchTest.TestSearchNumbers();
    searchTest.TestSearchNegativeNumbers();
    searchTest.TestSearchZero();
    searchTest.TestSearchAlphanumeric();
    searchTest.TestSearchNegativeLetters();
    searchTest.TestSearchAlphanumeric();
    searchTest.TestSearchMecanica();

    console.log("PRUEBAS BUSCAR MECANICAS")
    searchMechanicsTest.TestSearchMechanicBanana();
    searchMechanicsTest.TestSearchMechanicNegatives();
    searchMechanicsTest. TestSearchMechanicNumbers();
    searchMechanicsTest.TestSearchMechanicLavado();
    searchMechanicsTest.TestSearchMechanicEmpty();
    searchMechanicsTest.TestSearchMechanicJhonBox();
    searchMechanicsTest.TestSearchMechanicNegative();
    searchMechanicsTest.TestSearchMechanicNegativeLetters();
    searchMechanicsTest.TestSearchMechanicOffnum();
    searchMechanicsTest.TestSearchMechanicSymbols();

    console.log("PRUEBAS DE LOGIN ");
    test_login.control_login_test_Mecanico();
    test_login.control_login_test_Administrador();
    test_login.control_login_test_usuarioNormal();
    test_login.control_login_test_SinUsuario();
    test_login.control_login_test_Admin_minuscula();
    test_login.control_login_test_cedula_negativa();
    test_login.control_login_test_cedula_caracter();
    test_login.control_login_test_cedula_caracter_final();
    test_login.control_login_test_admin_inicio();
    test_login.control_login_test_admin_final();
    test_login.control_login_test_entero_positivo_grande();


    console.log("PRUEBAS VALIDACION DE CEDULAS");
    test_cedula.validarcedula_test_valida();
    test_cedula.validarcedula_test_incompleta();
    test_cedula.validarcedula_test_mayor_a_10digitos();
    test_cedula.validarcedula_test_negativa();
    test_cedula.validarcedula_test_caracter();
    test_cedula.validarcedula_test_caracteres();
    test_cedula.validarcedula_test_vacia();
    test_cedula.validarcedula_test_pichincha();
    test_cedula.validarcedula_test_imbabura();
    test_cedula.validarcedula_test_imbabura_novalida();
    test_cedula.validarcedula_test_carchi();
    test_cedula.validarcedula_test_manabi();
    test_cedula.validarcedula_test_napo();
    test_cedula.validarcedula_test_azuay();
    test_cedula.validarcedula_test_loja();
    test_cedula.validarcedula_test_chimborazo();
    test_cedula.validarcedula_test_guayas();
    test_cedula.validarcedula_test_eloro();
    test_cedula.validarcedula_test_orellana();
    test_cedula.validarcedula_test_losrios();
    test_cedula.validarcedula_test_pastaza();
    test_cedula.validarcedula_test_cotopaxi();
    test_cedula.validarcedula_test_stodomingo();
    test_cedula.validarcedula_test_canar();
    test_cedula.validarcedula_test_tungurahua();
    test_cedula.validarcedula_test_staelena();
    test_cedula.validarcedula_test_zamora();
    test_cedula.validarcedula_test_bolivar();
    test_cedula.validarcedula_test_morona();
    test_cedula.validarcedula_test_esmeraldas();
    test_cedula.validarcedula_test_galapagos();
    test_cedula.validarcedula_test_sucumbios();



    console.log(" PRUEBAS  DE REVISION DE SERVICIOS DE MECANICAS");
    revisarServiciosTest.TestRevBananaOso();
    revisarServiciosTest.TestRevMarceloLavLlantas();
    revisarServiciosTest.TestRevSOSLavLlantas();
    revisarServiciosTest.TestRevSOSLavCoche();
    revisarServiciosTest.TestRevSOSNumbers();
    revisarServiciosTest.TestRev123Servicio();
    revisarServiciosTest.TestRevLetrasNegativas();

    console.log(" PRUEBAS  DE SERVICIOS DE MECANICAS");
    gestionarServiciosTest.testDataNormal();
    gestionarServiciosTest.testNumerosEnDescripcion();
    gestionarServiciosTest.testNumerosEnCosto();
    gestionarServiciosTest.testNumerosEnTipoServicio();
    gestionarServiciosTest.testNumerosEnSucurcal();
    gestionarServiciosTest.testNumerosNegativosEnCosto();
    gestionarServiciosTest.testLetrasEnCosto();
    gestionarServiciosTest.testNumerosEnTodo();
    gestionarServiciosTest.testCeroNegativoEnTodo();
    gestionarServiciosTest.testvalidarNumeros();
    gestionarServiciosTest.testvalidarNumerosConLetras();
    gestionarServiciosTest.testvalidarNumerosNegativos();
    gestionarServiciosTest.testvalidarSoloLetras();
    gestionarServiciosTest.testvalidarCero();
    gestionarServiciosTest.testvalidarSimbolos();
    gestionarServiciosTest.testvalidarNumerosMedianos();
    gestionarServiciosTest.testvalidarLetrasNegativas();


    console.log("CARGANDO VALORES DE LA SESION");
    UserG="";
    TipoUserG="";
    Busqueda="";
    Mecanica="";
    Seleccion="";
    Ruta="";
    if(Meteor.user()!=null){
      UserG=Meteor.user().username;
      if(isNaN(UserG)==false){
          console.log("logeado como mecanico");
          TipoUserG= "/MecanicServ";
          Mecanica=Mecanicos.findOne({"cedu": {$regex: ".*" + UserG + ".*"}}).nomMe;
          console.log('Asociado a la mecanica: '+Mecanica);
          //Router.go('/MecanicServ');
      }else{
        if(UserG.includes("ADMIN")){
          console.log('logeado como admin');
          TipoUserG=  'admin';
          TipoUserG= "/GesAdmin";
          var ref="{{pathFor 'mainServices'}}";
          //Router.go('/GesAdmin');
        }else{
          console.log('logeado como usuario');
          TipoUserG= 'usuario';
          TipoUserG="/GesUser";
          var ref="{{pathFor 'mainServices'}}";
        }
    }
  }else{
    console.log("No hay una sesion guardada, Inicia sesion por favor");
  }
  },1000);


});
