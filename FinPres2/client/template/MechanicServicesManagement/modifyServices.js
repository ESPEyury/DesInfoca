Template.modifyServices.onRendered(function(){
   const Descipcion = this.find('#Descripcion').value;
   const Costos = this.find('#Costo').value;
 });


Template.modifyServices.helpers({
  Services() {
    return Servicios.find({"tipouser": {$regex: ".*" + UserG + ".*"}}).fetch();
  },
  Descripcion() {
    return this.document.getElementsByTagName("Descripcion").value;
  },
});

Template.modifyServices.events({
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
