Template.signUp.events({
    //'click #btnRegistrar':function(event){
    'submit form':function (event) {
      console.log("PI-6: Registro de clientes");
        event.preventDefault();
        var nameVar = event.target.registerName.value;
        var lastNameVar= event.target.registerLast.value;
        var userVar = event.target.registerUser.value;
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        console.log("PI-6.1: Leyendo datos");
        if(isNaN(userVar)==true){
          console.log("PI-6.2: Validando usuario");
          if(!(userVar.includes("ADMIN"))){
            console.log("PI-6.3: Validando usuario no administrador");
            //return Servicios.find({"tipouser": {$regex: ".*" + UserG + ".*"}}).fetch();
            //var usuarioTemp=Meteor.users.findOne({}, {fields: {name: 1, _id: 0}}).name;
            if(Meteor.users.findOne({"username":{$regex: ".*" + userVar + ".*"}})){
              var usuarioTemp=Meteor.users.findOne({"username":{$regex: ".*" + userVar + ".*"}}).username;
            }else{
              var usuarioTemp="vacio";
            }
            if(Clientes.findOne({"emailVar":{$regex: ".*" + emailVar + ".*"}})){
              var emailTemp=Clientes.findOne({"emailVar":{$regex: ".*" + emailVar + ".*"}}).emailVar;
            }else{
              var emailTemp="vacio";
            }
            //console.log("Sacado de la base de datos: "+ usuarioTemp);
            //console.log("Sacado del cliente: " +userVar);
            if(usuarioTemp==userVar){

              swal('Usuario ya registrado', 'Nombre de usuario ya registrado, prueba con otro nombre...', 'error');
              //alert("Cliente ya registrado en la base de datos");
            }else{
              if(emailTemp==emailVar){
                swal('Correo ya registrado', 'Direccion de correo ya registrada...', 'error');
              }else{
                console.log("PI-6.4: Creando usuario");
                Accounts.createUser({
                    username: userVar,
                    email: emailVar,
                    password: passwordVar,
                }), function(error){
                    if(error){
                        console.log(error.reason); // Output error if registration fails
                    } else {
                        Router.go("home"); // Redirect user if registration succeeds
                    }
                };
                console.log("PI-6.4: insertando datos en clientes");
                Clientes.insert({
                        nameVar,
                        lastNameVar,
                        userVar,
                        emailVar,
                        passwordVar,
                        createdAt: new Date(),
                      });
                      Router.go('/');
                      swal('Completado', 'Tu registro se a completado con exito, inicia sesion...', 'success');
              }
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
          //    $(document).getElementById("link2").setAttribute("href",ref);
          */
        },
});
