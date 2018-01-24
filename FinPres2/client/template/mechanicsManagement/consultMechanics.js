Template.consultMechanics.helpers({
//Permite conocer todos los emcanicos registrados en la abse de datos
       Mecanics() {
            return Mecanicos.find();

      },
});

Template.consultMechanics.events({
  //Funcion para eliminar los mecanicos registrados en la base de datos
    'click .delete'() {
        Mecanicos.remove(this._id);
        swal('Eliminado','Mecanico Eliminado Del Registro','success');
        console.log("PI-5: Eliminar Mecánicos");
        console.log("PI-5.1: Mecánico eliminado");
      },
});
