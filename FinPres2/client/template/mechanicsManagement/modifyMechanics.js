Template.modifyMechanics.helpers({
       Mechanics() {
          return Mechanics.find();
      },
});

Template.modifyMechanics.events({
    'submit form':function (event) {
        // Prevent default browser form submit
        event.preventDefault();
        var newEmail=event.target.Email.value;
        var newDirection=event.target.Dir.value;
        var newPhone=event.target.Phone.value;
        var newMechanicName=event.target.MechanicName.value;
        var newBranch=event.target.Branch.value;
        console.log("PI-4: Modificacion de mecánico");
        console.log("PI-4.1: Leyendo variables ");
        Mechanics.update(this._id,{$set:{email: newEmail, direction:newDirection, phone:newPhone, mechanicName:newMechanicName,branch:newBranch}});
        swal("Mecanico Actualizado","","success");
        console.log("PI-4.2: Actualizando datos en la base de datos");
        event.target.Email.value = '';
        event.target.Dir.value = '';
        event.target.Phone.value = '';
        event.target.MechanicName.value='';
        event.target.Branch.value='';
      },
});
