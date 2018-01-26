Template.consultHiredServices.helpers({
//Devuelve una lista de servicio contratados por el usuario UserG
  Services() {
      return ServicesUser.find({"tipouser": {$regex: ".*" + UserG + ".*"}}).fetch();
  },
});


//permite eliminar de la base de datos el servicio seleccionado
Template.consultHiredServices.events({
  'click .delete'() {
    swal('Eliminado','Servicio eliminado del historial','success');
    ServicesUser.remove(this._id);
  },
});
