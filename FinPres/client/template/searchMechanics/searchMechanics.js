Template.searchMechanics.helpers({
       Servicios() {
         var bus=Busqueda.split("/")[2];
        // Busqueda="";
          return  Servicios.find({"tipServ": {$regex: ".*" + bus + ".*"}}).fetch();
      },

});



Template.searchMechanics.events({
/*  'submit form':function(event){
     Seleccion=this._id;
     console.log(Seleccion);
  },*/

  'click .buscar'() {
     Seleccion=this._id;
     console.log(Seleccion);
     Router.go("/RevServs/"+Seleccion);
    },
});
