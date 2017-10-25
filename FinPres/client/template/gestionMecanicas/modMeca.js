Template.modificarMecanicas.helpers({
       Mecanics() {
          return Mecanicos.find();
      },
});

Template.modificarMecanicas.events({
          /*  'click .update'() {

              Mecanicos.update(this._id, {$set:{dir: !this.dir,tele: !this.tele, sucur: !this.sucur}});
            },*/
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
