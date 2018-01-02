Template.modificarMecanicas.helpers({
       Mecanics() {
          return Mecanicos.find();
      },
});

Template.modificarMecanicas.events({
    'submit form':function (event) {
        // Prevent default browser form submit
        event.preventDefault();
        var email=event.target.Email.value;
        var Dir=event.target.Dir.value;
        var Telef=event.target.Telef.value;
        var NomMeca=event.target.NomMeca.value;
        var Sucur=event.target.Sucur.value;
        Mecanicos.update(this._id,{$set:{ema: email, dir: Dir, tele:Telef, nomMe:NomMeca,sucur:Sucur}});
        event.target.Email.value = '';
        event.target.Dir.value = '';
        event.target.Telef.value = '';
        event.target.NomMeca.value='';
        event.target.Sucur.value='';
      },
});
