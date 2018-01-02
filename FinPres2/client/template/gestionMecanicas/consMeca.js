Template.consultarMecanicas.helpers({
       Mecanics() {
          return Mecanicos.find();
      },
});

Template.consultarMecanicas.events({
    'click .delete'() {
        Mecanicos.remove(this._id);
      },
});
