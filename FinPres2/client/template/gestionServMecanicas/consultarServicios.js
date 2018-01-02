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
