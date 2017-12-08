Template.modificarServicios.onRendered(function(){
   const Descipcion = this.find('#Descripcion').value;
   const Costos = this.find('#Costo').value;
 });


Template.modificarServicios.helpers({
       Services() {
          return Servicios.find({"tipouser": {$regex: ".*" + UserG + ".*"}}).fetch();
      },
      Descripcion() {
         return this.document.getElementsByTagName("Descripcion").value;
       },
});

Template.modificarServicios.events({
            /*'click .update': function(e,t) {

            //  var descripcion = Descripcion();
            //  var costos=event.target.Costo.value;
              //Servicios.update(this._id,{$set:{descript: ! this.descript}});
              //Servicios.update(this._id,{$set:{costo: ! this.costo}});
            },*/

              'submit form':function (event) {
                // Prevent default browser form submit
                event.preventDefault();
                var descripcion=event.target.Descripcion.value;
                var costos=event.target.Costo.value;
                Servicios.update({_id:this._id},{$set:{descript: descripcion,costo: costos}});
                event.target.Descripcion.value = '';
                event.target.Costo.value = '';
              },
          });






/*
Template.consultarMeca.events({
          'submit form':function (event) {
            // Prevent default browser form submit
            event.preventDefault();
            var cedu = event.target.CeduMeca.value;
             const Mecan=function () {
                return Mecanicos.find({"cedu": cedu});
            }
          },
      });
*/
