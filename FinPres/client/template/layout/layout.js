/*Template.layout.helpers({
       refer() {
           UserG=Meteor.user().username;
             if(!isNaN(UserG)){
                 return 'mainServices';
             }else{
               if(UserG.includes("ADMIN")){
                 return  'admin';
               }else{
                 return 'usuario';
               }
             }
        },
});*/
/*
Template.layout.events({
    'click #login-buttons-logout': function (event) {
    //add your custom logic on top of this
    //the default behaviour should still happen from meteor
    }
});
*/


Template.layout.events ({
  "click #login-buttons-logout" : function (event, template) {
    Meteor.logout(function(err) {
      Router.go('/');
    });
  }
});

/*
Template.layout.events({
    'click #login-buttons-logout': function (event) {
        return Session.get('search');
    }
});
*/
/*
Meteor.logout(function(err) {
  Router.go('search');
});

*/


Accounts.onLogin(function () {
  console.log("entre a la funcion");
if(!Meteor.user().username){
  alert("Vacio");
}
UserG=Meteor.user().username;
  if(isNaN(UserG)==false){
      console.log("logeado como mecanico");
      //TipoUserG= 'mainServices';
      TipoUserG= "/MecanicServ";
      Mecanica=Mecanicos.findOne({"cedu": {$regex: ".*" + UserG + ".*"}}).nomMe;
      console.log('Asociado a la mecanica: '+Mecanica);
      //var ref="{{pathFor 'mainServices'}}";
    //  $(document).getElementById("link2").setAttribute("href",ref);
  }else{
    if(UserG.includes("ADMIN")){
      console.log('logeado como admin');
      TipoUserG=  'admin';
      TipoUserG= "/GesAdmin";
      var ref="{{pathFor 'mainServices'}}";
      //  $(document).getElementById("link2").setAttribute("href",ref);
    }else{
      console.log('logeado como usuario');
      TipoUserG= 'usuario';
      TipoUserG="/GesUser";
      var ref="{{pathFor 'mainServices'}}";
    //    $(document).getElementById("link2").setAttribute("href",ref);
    }
  }
},

    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    //this.next();
);
