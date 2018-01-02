import * as test from "./searchMechanicsTest.js";


Template.searchMechanics.helpers({
    Servicios() {
      if(Meteor.user()){
        var bus=Busqueda.split("/")[2];
        //if(Servicios.find({"tipServ": {$regex: ".*" + bus + ".*"}}).count()==0){
        if(Servicios.find({"tipServ": {$regex: new RegExp( bus,"i")}}).count()==0){
          swal('Sin coincidencias','No pudillos hallar ninguna coincidencia, Intentalo de nuevo', 'question');
          Busqueda="";
          Seleccion="";
          Ruta="";
          Router.go("/");
        }else{
          //Profiles.findOne({"username": /^newName$/i });
          //  return Servicios.find({"tipServ": {$regex: ".*" + bus + ".*"}}).fetch();
          return  Servicios.find({"tipServ": {$regex: new RegExp( bus,"i")}}).fetch();
        }
      }else{
        swal('ADVERTENCIA','Busqueda por barra de navegacion desactivada', 'warning');
        Busqueda="";
        Seleccion="";
        Ruta="";
        Router.go("/");
      }
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
