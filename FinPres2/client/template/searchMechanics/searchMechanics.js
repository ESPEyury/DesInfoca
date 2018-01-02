import * as test from "./searchMechanicsTest.js";


Template.searchMechanics.helpers({
       Servicios() {
         var bus=Busqueda.split("/")[2];
         return  Servicios.find({"tipServ": {$regex: ".*" + bus + ".*"}}).fetch();
      },

});

Template.searchMechanics.events({
  'click .buscar'() {
     Seleccion=this._id;
     console.log(Seleccion);
     Router.go("/RevServs/"+Seleccion);
    },
});

export const coutSearch = (palabraBusqueda) => {
  if(!palabraBusqueda){
    return 0;
  }
  Busqueda=palabraBusqueda;
  if(isNaN(Busqueda)==true){
    return Servicios.find({"tipServ": {$regex: ".*" + palabraBusqueda + ".*"}}).count();
  }else{
    return 0;
  }
};
