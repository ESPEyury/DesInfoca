
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import * as test_login from "./template/layout/layout_test.js";
import * as searchTest from './template/search/searchTest.js';
import * as searchMechanicsTest from './template/searchMechanics/searchMechanicsTest.js';

Meteor.startup(()=>{
  setTimeout(function(){
    console.log("PRUEBAS BUSQUEDA");
    searchTest.TestSearchBanana();
    searchTest.TestSearchEmpty();
    searchTest.TestSearchServicio();
    searchTest.TestSearchNumbers();
    searchTest.TestSearchNegativeNumbers();
    console.log("PRUEBAS BUSCAR MECANICAS")
    searchMechanicsTest.TestSearchMechanicBanana();
    searchMechanicsTest.TestSearchMechanicNegatives();
    searchMechanicsTest. TestSearchMechanicNumbers();
    searchMechanicsTest.TestSearchMechanicLavado();
    searchMechanicsTest.TestSearchMechanicEmpty();
    console.log("PRUEBAS DE LOGIN: ");
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
  },1000);


});
