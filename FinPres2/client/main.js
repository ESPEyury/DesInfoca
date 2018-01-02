
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import * as searchTest from './template/search/searchTest.js';
import * as searchMechanicsTest from './template/searchMechanics/searchMechanicsTest.js';
import * as test_login from "./template/layout/layout_test.js";
import * as test_cedula from "./template/gestionMecanicas/mecanicas_test.js";

Meteor.startup(()=>{
  /*
  setTimeout(function(){
    console.log("PRUEBAS BUSQUEDA");
    //10
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
    //6
    searchMechanicsTest.TestSearchMechanicBanana();
    searchMechanicsTest.TestSearchMechanicNegatives();
    searchMechanicsTest. TestSearchMechanicNumbers();
    searchMechanicsTest.TestSearchMechanicLavado();
    searchMechanicsTest.TestSearchMechanicEmpty();
    searchMechanicsTest.TestSearchMechanicJhonBox();
    console.log("Pruebas de login: ");
    //11
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
    console.log("Pruebas de validacion de cedula: ");
    //10
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
    console.log(" PRUEBAS  DE SERVICIOS DE MECANICAS");
    //17
    gestionarServiciosTest.testDataNormal();
    gestionarServiciosTest.testNumerosEnDescripcion();
    gestionarServiciosTest.testNumerosEnCosto();
    gestionarServiciosTest.testNumerosEnTipoServicio();
    gestionarServiciosTest.testNumerosEnSucursal();
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
    gestionarServiciosTest.testvalidarLetrasNegavitas();
  },1000);

*/
});
