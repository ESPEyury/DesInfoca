import * as test from "./searchMechanicsTest.js";


Template.searchMechanics.helpers({
    Services() {
      if(Meteor.user()){
        var search=GLOBAL_SEARCH.split("/")[2];
        //if(Services.find({"tipServ": {$regex: ".*" + search + ".*"}}).count()==0){
        if(find_services(search)){
          swal('Sin coincidencias','No pudillos hallar ninguna coincidencia, Intentalo de nuevo', 'question');
          GLOBAL_SEARCH="";
          GLOBAL_SELECTION="";
          Route="";
          Router.go("/");
        }else{
          return  Services.find({"tipoServicio": {$regex: new RegExp( search,"i")}}).fetch();
        }
      }else{
        swal('ADVERTENCIA','Busqueda por barra de navegacion desactivada', 'warning');
        GLOBAL_SEARCH="";
        GLOBAL_SELECTION="";
        Route="";
        Router.go("/");
      }
    },
});

find_services(){
  return Services.find({"tipoServicio": {$regex: new RegExp( search,"i")}}).count()==0;
}

Template.searchMechanics.events({
  'click .buscar'() {
     GLOBAL_SELECTION=this._id;
     console.log(GLOBAL_SELECTION);
     Router.go("/RevServs/"+GLOBAL_SELECTION);
    },
});

export const coutSearch = (searchWord) => {
  if(!searchWord){
    return 0;
  }
  GLOBAL_SEARCH=searchWord;
  if(isNaN(GLOBAL_SEARCH)==true){
    return Services.find({"tipoServicio": {$regex: ".*" + searchWord + ".*"}}).count();
  }else{
    return 0;
  }
};
