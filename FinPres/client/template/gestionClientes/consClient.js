Template.consultarMecanicas.helpers({
       Clientes() {
          return Clientes.find();
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
