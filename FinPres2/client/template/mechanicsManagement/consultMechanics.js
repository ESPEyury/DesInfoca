Template.consultMechanics.helpers({
//Permite conocer todos los emcanicos registrados en la abse de datos
       Mechanics() {
            return Mechanics.find();

      },
});

Template.consultMechanics.events({
  //Funcion para eliminar los mecanicos registrados en la base de datos
    'click .delete'() {
        Mechanics.remove(this._id);
        swal('Eliminado','Mecanico Eliminado Del Registro','success');
        console.log("PI-5: Eliminar Mecánicos");
        console.log("PI-5.1: Mecánico eliminado");
      },
});
