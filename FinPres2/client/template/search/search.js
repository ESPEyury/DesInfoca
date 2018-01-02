import * as test from "./searchTest.js";


Template.searchSom.events({
    'click .buscaA' (){

        Router.go('/Search/'+Busqueda);
        stopPropagation();
    },
});

export const setBusqueda = (palabraBusqueda) => {
  if(!palabraBusqueda){
    return 'Busqueda Vacia';
  }
  Busqueda=palabraBusqueda;
  if(isNaN(Busqueda)==true){
    return Busqueda;
  }else{
    return('Busqueda No Valida');
  }
};
