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
