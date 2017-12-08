Template.consultarServicios.helpers({
       Services() {
          return Servicios.find({"tipouser": {$regex: ".*" + UserG + ".*"}}).fetch();
      },
});



Template.consultarServicios.events({
            'click .delete'() {
                 Servicios.remove(this._id);
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
