Template.gesMen.events({
          'submit form':function (event) {
            // Prevent default browser form submit
            event.preventDefault();
            var tipouser = UserG;
            var cedu = event.target.Cedula.value;
            var nom = event.target.Nombres.value;
            var ape  = event.target.Apellidos.value;
            var dir = event.target.Direccion.value;
            var ema = event.target.Email.value;
            var tele = event.target.Telefono.value;
            var nomMe = event.target.Mecanica.value;
            var pass = event.target.Pass.value;
            var sucur = event.target.Sucursal.value;
            if(isNaN(cedu)==false){
                if(Meteor.users.findOne({"username":{$regex: ".*" + cedu + ".*"}})){
                  var usuarioTemp=Meteor.users.findOne({"username":{$regex: ".*" + cedu + ".*"}}).username;
                }else{
                  var usuarioTemp="vacio";
                }
                console.log("Sacado de la base de datos: "+ usuarioTemp);
                console.log("Sacado del cliente: " +cedu);
                if(usuarioTemp==cedu){
                  alert("Mecanico ya registrado en la base de datos");
                }else{
                  Accounts.createUser({
                      username: cedu,
                      email: ema,
                      password: pass,
                  });
                  Mecanicos.insert({
                    tipouser,
                    cedu,
                    nom,
                    ape,
                    ema,
                    dir,
                    tele,
                    nomMe,
                    pass,
                    sucur,
                    createdAt: new Date(),
                  });
                  alert("Mecanico Registrado con exito");
                }
            }else{
              alert("Ingresa una cedula valida");
            }
            event.target.Email.value='';
            event.target.Cedula.value = '';
            event.target.Nombres.value = '';
            event.target.Apellidos.value = '';
            event.target.Direccion.value = '';
            event.target.Telefono.value = '';
            event.target.Mecanica.value = '';
            event.target.Pass.value = '';
            },
        });
