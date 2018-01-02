
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
    //  ----++++==== 65 ====++++----  \\

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


    console.log("PRUEBAS VALIDACOIN DE CEDULAS");
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
    console.log("No hay una sesion guardada, Inicia sesion porfavor");
  }
  },1000);


});
