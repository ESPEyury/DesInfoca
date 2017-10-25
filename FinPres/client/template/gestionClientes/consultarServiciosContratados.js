Template.consultarServiciosContratados.helpers({
       Services() {
          return ServiciosUser.find({"tipouser": {$regex: ".*" + UserG + ".*"}}).fetch();
      },
});



Template.consultarServiciosContratados.events({
            'click .delete'() {
                 ServiciosUser.remove(this._id);
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
