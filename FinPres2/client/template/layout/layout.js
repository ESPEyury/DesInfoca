Template.layout.rendered = function() {
    if(!this._rendered) {
      this._rendered = true;
      Accounts.onLogin(function () {
        console.log("entre a la funcion");
          if(!Meteor.user().username){
            swal('Nombre de usuario vacio','error');
          }
          GLOBAL_USER=Meteor.user().username;
            if(isNaN(GLOBAL_USER)==false){
                console.log("logeado como mecanico");
                GLOBAL_TYPE_USER= "/MecanicServ";
                GLOBAL_MECHANIC=Mechanics.findOne({"cedula": {$regex: ".*" + GLOBAL_USER + ".*"}}).nombreMecanica;
                console.log('Asociado a la mecanica: '+GLOBAL_MECHANIC);
                //Router.go('/MecanicServ');
            }else{
              if(GLOBAL_USER.includes("ADMIN")){
                console.log('logeado como admin');
                GLOBAL_TYPE_USER=  'admin';
                GLOBAL_TYPE_USER= "/GesAdmin";
                var ref="{{pathFor 'mainServices'}}";
                //Router.go('/GesAdmin');
              }else{
                console.log('logeado como usuario');
                GLOBAL_TYPE_USER= 'usuario';
                GLOBAL_TYPE_USER="/GesUser";
                var ref="{{pathFor 'mainServices'}}";
              }
            }
          },
      );
    }
}




Template.layout.events ({
  'click #login-buttons-logout' : function (event, template) {
   Meteor.logout(function(err) {
      Router.go('/');
      GLOBAL_USER="";
      GLOBAL_TYPE_USER="";
      GLOBAL_SEARCH="";
      GLOBAL_MECHANIC="";
      GLOBAL_SELECTION="";
      GLOBAL_ROUTE="";
    });
  },

  'click #GestionBtn' : function(event){
    if(Meteor.user().username.includes("ADMIN")){
      Router.go('/GesAdmin');
    }else{
      if(isNaN(Meteor.user().username)){
        Router.go('/GesUser');
      }else{
        Router.go('/MecanicServ');
      }
    }
  },
});





/**
 * @param {String} username nombre del usuario
   @returns {String} regresa el tipo de usuario
  */
//Para realizar pruebas
export const control_login_t = (username) => {
  if(!username){
    return "usuario no encontrado";
  }
  GLOBAL_USER=username;
    if(isNaN(GLOBAL_USER)==false){
        GLOBAL_TYPE_USER= "/MecanicServ";
        return "usuario: Mecanico";
    }else{
      if(GLOBAL_USER.includes("ADMIN") ){
        GLOBAL_TYPE_USER= "/GesAdmin";
        var ref="{{pathFor 'mainServices'}}";
        return "usuario: Administrador";
      }else{
        GLOBAL_TYPE_USER="/GesUser";
        var ref="{{pathFor 'mainServices'}}";
        return "usuario: Cliente";
      }
    }
};
