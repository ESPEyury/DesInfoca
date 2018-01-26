Template.layout.rendered = function() {
    if(!this._rendered) {
      this._rendered = true;
      console.log('Hola! esta es la ultima version! :D');
      Accounts.onLogin(function () {
        console.log("entre a la funcion");
          if(!Meteor.user().username){
            swal('Nombre de usuario vacio','error');
          }
          UserG=Meteor.user().username;
            if(isNaN(UserG)==false){
                console.log("logeado como mecanico");
                TipoUserG= "/MecanicServ";
                Mecanica=Mechanics.findOne({"cedula": {$regex: ".*" + UserG + ".*"}}).nombreMecanica;
                console.log('Asociado a la mecanica: '+Mecanica);
                //Router.go('/MecanicServ');
            }else{
              if(UserG.includes("ADMIN")){
                console.log('logeado como admin');
                TipoUserG=  'admin';
                TipoUserG= "/GesAdmin";
                var ref="{{pathFor 'mainServices'}}";
                //Router.go('/GesAdmin');
              }else{
                console.log('logeado como usuario');
                TipoUserG= 'usuario';
                TipoUserG="/GesUser";
                var ref="{{pathFor 'mainServices'}}";
              }
            }
          },
      );
    /*  console.log("Corriendo despues de cargar");
    	if(Meteor.user()==null){
    		swal('ADVERTENCIA','Busqueda por barra de navegacion desactivada', 'warning');
    		Busqueda="";
    		Selection="";
    		Ruta="";
    		Router.go("/");
    	}else{
    		if(Meteor.user().username.indexOf("ADMIN")==-1){
    			swal('Intruso','Usted no tiene permisos para este modulo', 'error');
    			Busqueda="";
    			Selection="";
    			Ruta="";
    			Router.go("/");
    		}
    	}*/
    }

}




Template.layout.events ({
  'click #login-buttons-logout' : function (event, template) {
   Meteor.logout(function(err) {
      Router.go('/');
      UserG="";
      TipoUserG="";
      Busqueda="";
      Mecanica="";
      Selection="";
      Ruta="";
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
    //alert("Vacio");
    return "usuario no encontrado";
  }
  UserG=username;
    if(isNaN(UserG)==false){
        //console.log("logeado como mecanico");
        TipoUserG= "/MecanicServ";
        //Mecanica=Mechanics.findOne({"cedu": {$regex: ".*" + UserG + ".*"}}).nomMe;
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
