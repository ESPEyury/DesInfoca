
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

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
    searchMechanicsTest.TestSearchMechanicJhonBox();
  },1000);


});
