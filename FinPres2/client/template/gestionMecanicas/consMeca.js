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



/*
Template.consultarMeca.events({
          'submit form':function (event) {
            // Prevent default browser form submit
            event.preventDefault();
            var cedu = event.target.CeduMeca.value;
             const Mecan=function () {
                return Mecanicos.find({"cedu": cedu});
            }
          },
      });
*/
