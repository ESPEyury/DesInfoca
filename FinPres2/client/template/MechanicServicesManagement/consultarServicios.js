Template.consultarServicios.helpers({
       Services() {
          return Servicios.find({"tipouser": {$regex: ".*" + UserG + ".*"}}).fetch();
      },
});

Template.consultarServicios.events({
            'click .delete'() {
                swal('Completado','Servicio Removido','success');
                 Servicios.remove(this._id);
              },
          });