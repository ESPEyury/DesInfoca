Template.modifyMechanics.helpers({
       Mecanics() {
          return Mecanicos.find();
      },
});

Template.modifyMechanics.events({
    'submit form':function (event) {
        // Prevent default browser form submit
        event.preventDefault();
        var nuevoEmail=event.target.Email.value;
        var nuevaDireccion=event.target.Dir.value;
        var nuevoTelefono=event.target.Telef.value;
        var nuevoNombreMecanica=event.target.NomMeca.value;
        var nuevaSucursal=event.target.Sucur.value;
        console.log("PI-4: Modificacion de mecánico");
        console.log("PI-4.1: Leyendo variables ");
        Mecanicos.update(this._id,{$set:{email: nuevoEmail, direccion:nuevaDireccion, telefono:nuevoTelefono, nombreMecanica:nuevoNombreMecanica,sucursal:nuevaSucursal}});
        swal("Mecanico Actualizado","","success");
        console.log("PI-4.2: Actualizando datos en la base de datos");
        event.target.Email.value = '';
        event.target.Dir.value = '';
        event.target.Telef.value = '';
        event.target.NomMeca.value='';
        event.target.Sucur.value='';
      },
});
