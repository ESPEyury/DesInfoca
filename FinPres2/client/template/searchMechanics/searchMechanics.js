import * as test from "./searchMechanicsTest.js";


Template.searchMechanics.helpers({
    Services() {
      if(Meteor.user()){
        var srch=Search.split("/")[2];
        //if(Services.find({"tipServ": {$regex: ".*" + srch + ".*"}}).count()==0){
        if(Services.find({"tipoServicio": {$regex: new RegExp( srch,"i")}}).count()==0){
          swal('Sin coincidencias','No pudillos hallar ninguna coincidencia, Intentalo de nuevo', 'question');
          Search="";
          Selection="";
          Route="";
          Router.go("/");
        }else{
          //Profiles.findOne({"username": /^newName$/i });
          //  return Services.find({"tipServ": {$regex: ".*" + srch + ".*"}}).fetch();
          return  Services.find({"tipoServicio": {$regex: new RegExp( srch,"i")}}).fetch();
        }
      }else{
        swal('ADVERTENCIA','Busqueda por barra de navegacion desactivada', 'warning');
        Search="";
        Selection="";
        Route="";
        Router.go("/");
      }
    },
});

Template.searchMechanics.events({
  'click .buscar'() {
     Selection=this._id;
     console.log(Selection);
     Router.go("/RevServs/"+Selection);
    },
});

export const coutSearch = (searchWord) => {
  if(!searchWord){
    return 0;
  }
  Search=searchWord;
  if(isNaN(Search)==true){
    return Services.find({"tipoServicio": {$regex: ".*" + searchWord + ".*"}}).count();
  }else{
    return 0;
  }
};
