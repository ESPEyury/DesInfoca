Template.consultServices.helpers({
       Services() {
          return Services.find({"tipouser": {$regex: ".*" + UserG + ".*"}}).fetch();
      },
});

Template.consultServices.events({
            'click .delete'() {
                swal('Completado','Servicio Removido','success');
                 Services.remove(this._id);
              },
          });
