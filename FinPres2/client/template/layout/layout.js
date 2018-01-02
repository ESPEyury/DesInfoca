Template.layout.events ({
  "click #login-buttons-logout" : function (event, template) {
  /*  Meteor.logout(function(err) {
      Router.go('/');
    });*/
  }
});

Accounts.onLogin(function () {
  console.log("entre a la funcion");
    if(!Meteor.user().username){
      swal('Nombre de usuario vacio','error');
    }
    UserG=Meteor.user().username;
      if(isNaN(UserG)==false){
          console.log("logeado como mecanico");
          TipoUserG= "/MecanicServ";
          Mecanica=Mecanicos.findOne({"cedu": {$regex: ".*" + UserG + ".*"}}).nomMe;
          console.log('Asociado a la mecanica: '+Mecanica);
      }else{
        if(UserG.includes("ADMIN")){
          console.log('logeado como admin');
          TipoUserG=  'admin';
          TipoUserG= "/GesAdmin";
          var ref="{{pathFor 'mainServices'}}";
        }else{
          console.log('logeado como usuario');
          TipoUserG= 'usuario';
          TipoUserG="/GesUser";
          var ref="{{pathFor 'mainServices'}}";
        }
      }
    },
);

//Para realizar pruebas
export const control_login_t = (username) => {
  if(!username){
    //alert("Vacio");
    return "usuario no encontrado";
  }
  UserG=username;
    if(isNaN(UserG)==false){
        //console.log("logeado como mecanico");
        TipoUserG= "/MecanicServ";
        //Mecanica=Mecanicos.findOne({"cedu": {$regex: ".*" + UserG + ".*"}}).nomMe;
        //console.log('Asociado a la mecanica: '+Mecanica);
        return "usuario: Mecanico";
    }else{
      if(UserG.includes("ADMIN") ){
        //console.log('logeado como admin');
        //TipoUserG=  'admin';
        TipoUserG= "/GesAdmin";
        var ref="{{pathFor 'mainServices'}}";
        return "usuario: Administrador";
      }else{
        //console.log('logeado como usuario');
        //TipoUserG= 'usuario';
        TipoUserG="/GesUser";
        var ref="{{pathFor 'mainServices'}}";
        return "usuario: Cliente";
      }
    }
};
