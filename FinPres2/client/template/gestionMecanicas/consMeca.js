Template.consultarMecanicas.helpers({
       Mecanics() {
            return Mecanicos.find();

      },
});

Template.consultarMecanicas.events({
    'click .delete'() {
        Mecanicos.remove(this._id);
        console.log("PI-5: Eliminar Mecánicos");
        console.log("PI-5.1: Mecánico eliminado");
      },
});
