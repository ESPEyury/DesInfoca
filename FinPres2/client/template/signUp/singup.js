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

        validate_data(nameVar,lastNameVar,userVar,emailVar,passwordVar);

        },
});



validate_data(nameVar,lastNameVar,userVar,emailVar,passwordVar){
  console.log("PI-6.1: Leyendo datos");
  if(isNaN(userVar)==true){
    console.log("PI-6.2: Validando usuario");
    if(check_admin(userVar)){
      console.log("PI-6.3: Validando usuario no administrador");
      if(check_username(userVar)){
        var usuarioTemp=Meteor.users.findOne({"username":{$regex: ".*" + userVar + ".*"}}).username;
      }else{
        var usuarioTemp="vacio";
      }
      if(check_email(emailVar)){
        var emailTemp=Clients.findOne({"emailVar":{$regex: ".*" + emailVar + ".*"}}).emailVar;
      }else{
        var emailTemp="vacio";
      }
      if(usuarioTemp==userVar){
        swal('Usuario ya registrado', 'Nombre de usuario ya registrado, prueba con otro nombre...', 'error');
      }else{
        if(emailTemp==emailVar){
          swal('Correo ya registrado', 'Direccion de correo ya registrada...', 'error');
        }else{
          insert_user(userVar,emailVar,passwordVar);
          insert_client(nameVar,lastNameVar,userVar,emailVar,passwordVar);
        }
      }
    }else{
      swal('Nombre de usuario incorrecto', 'No puedes utilizar la palabra ADMIN en tu nombre de usuario...', 'error');
    }
  }else{
    swal('Nombre de usuario incorrecto', 'No puedes utilizar numeros en tu nombre de usuario...', 'error');
  }
}



check_admin(userVar){
  return !(userVar.includes("ADMIN"));
}
check_username(userVar){
  return Meteor.users.findOne({"username":{$regex: ".*" + userVar + ".*"}});
}
check_email(emailVar){
  return Clients.findOne({"emailVar":{$regex: ".*" + emailVar + ".*"}});
}




insert_user(userVar,emailVar,passwordVar){
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
}

insert_client(nameVar,lastNameVar,userVar,emailVar,passwordVar){
  console.log("PI-6.4: insertando datos en clientes");
  Clients.insert({
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
