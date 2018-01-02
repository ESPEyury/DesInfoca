Template.signUp.events({
    'submit form': function(event) {
        event.preventDefault();
        var nameVar = event.target.registerName.value;
        var lastNameVar= event.target.registerLast.value;
        var userVar = event.target.registerUser.value;
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        if(isNaN(userVar)==true){
          if(!(userVar.includes("ADMIN"))){
            //return Servicios.find({"tipouser": {$regex: ".*" + UserG + ".*"}}).fetch();
            //var usuarioTemp=Meteor.users.findOne({}, {fields: {name: 1, _id: 0}}).name;
            if(Meteor.users.findOne({"username":{$regex: ".*" + userVar + ".*"}})){
              var usuarioTemp=Meteor.users.findOne({"username":{$regex: ".*" + userVar + ".*"}}).username;
            }else{
              var usuarioTemp="vacio";
            }

            console.log("Sacado de la base de datos: "+ usuarioTemp);
            console.log("Sacado del cliente: " +userVar);
            if(usuarioTemp==userVar){
              swal('Usuario ya registrado', 'Nombre de usuario ya registrado, prueba con otro nombre...', 'error');
              //alert("Cliente ya registrado en la base de datos");
            }else{
              Accounts.createUser({
                  username: userVar,
                  email: emailVar,
                  password: passwordVar
              });
              Clientes.insert({
                      nameVar,
                      lastNameVar,
                      userVar,
                      emailVar,
                      passwordVar,
                      createdAt: new Date(),
                    });
            }
          }else{
            swal('Nombre de usuario incorrecto', 'No puedes utilizar la palabra ADMIN en tu nombre de usuario...', 'error');
            //alert("No puedes utilizar la palabra ADMIN en tu nombre de usuario");
          }
        }else{
          swal('Nombre de usuario incorrecto', 'No puedes utilizar numeros en tu nombre de usuario...', 'error');
          //alert("Al acceder con tu numero de cedula como usuario, comprobarias que eres mecanico, y no tienes acceso a regostrate por este metodo");
        }
          //  $(document).getElementById("link2").setAttribute("href",ref);
    /*    }else{
            console.log('usuario');
            TipoUserG= 'usuario';
            TipoUserG="/GesUser";
            var ref="{{pathFor 'mainServices'}}";
          //    $(document).getElementById("link2").setAttribute("href",ref


          */
        },
});
