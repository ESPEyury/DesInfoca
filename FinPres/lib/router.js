Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  /*notFoundTemplate: 'notFound'*/
});

/*
var mustBeSignedIn = function() {
    if (!(Meteor.user() || Meteor.loggingIn())) {
        Router.go('login');
    } else {
        this.next();
    }
};
*/
//Router.onBeforeAction('dataNotFound', {only: 'postPage'});


/*
AccountsTemplates.configure({
    defaultLayout: 'search',
});
n=0;*/
/*
Router.onBeforeAction(function () {
// all properties available in the route function
// are also available here such as this.params

  if (!Meteor.userId()) {
    // if the user is not logged in, render the Login template
    this.render('search');
  } else {
    var user=Meteor.user().username;//().username;//.findOne({_id :this.params.user_id});
    if(user){
      if(!isNaN(user)){
        if(n==0){
          this.route('mainServices');
          n=1;
        }

          //
      }else{
        if(user.includes("ADMIN")){
          this.render('admin');
          //this.next();
        }else{
          if(!user.includes("ADMIN")){
            this.render('usuario');
            //this.next();
          }

          //this.next();
        }
      }

    }

    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    //
  }
  if(n==1){
    this.next();
  }
});*/

/*
Router.route('/GesServ', function() {
  var user = Meteor.users.findOne({_id :this.params.user_id});
  this.render('gestionarServicios', {
    data: {
      username: user && user.username
    }
  });
});
*/
Router.route('/',{name:'searchSom'});
Router.route('/Registrar',{name:'signUp'});
Router.route('/Acerca',{name:'about'});
Router.route('/Ayuda',{name:'help'});
Router.route('/MecanicServ', {name: 'mainServices'});
Router.route('/GesServ', {name: 'gestionarServicios'});
Router.route('/GesServCon', {name: 'consultarServicios'});
Router.route('/GesServMod', {name: 'modificarServicios'});
//Router.route('/GesAdmin', {name: 'admin'});
Router.route('/GesUser', {name: 'consultarServiciosContratados'});
Router.route('/GesAdmin', {name: 'mainAdmin'});
Router.route('/GesMen', {name: 'gesMen'});
Router.route('/GesCli', {name: 'consultarClientes'});
Router.route('/GesMenCon', {name: 'consultarMecanicas'});
Router.route('/GesMenMod', {name: 'modificarMecanicas'});

//Router.route('/Search', {name: 'searchMechanics'});

Router.route( '/Search/:searchName', {

    name: 'searchMechanics',
  /*  data: Servicios() {
      Busqueda=this.params.searchName;

   }*/
    data: function(){

      /*    console.log("De camino a bsuqueda");
          console.log(this.params.searchName);*/

/*var mongoDbArr = [];
          searchArray.forEach(function(Busqueda) {
            mongoDbArr.push({tipServ: new RegExp(Busqueda)});
            mongoDbArr.push({descript: new RegExp(Busqueda,"i")});
          });
          return Servicios.find({ $or: mongoDbArr}).fetch();
*/
    /*      return Servicios.find({'$or' : [
            { 'tipServ':{'$regex':Busqueda} },
            { 'descrip':{'$regex':Busqueda} },
          ]
        });*/
        //var mon =Servicios.find({"tipServ": {$regex: ".*" + Busqueda + ".*"}}).fetch();
        Busqueda="/Search/"+this.params.searchName;
        //Busqueda=this.params.searchName;
        //return Servicios.find({"tipServ": {$regex: ".*" + Busqueda + ".*"}}).fetch();
      }
    //name: 'searchMechanics',
    /*
    data: function() {
      return  {
        Col: Servicios.find(),
        Busqueda: this.params.search
      }
    }*/
} );



Router.route('/RevServs/:Seleccion"', {

    name: 'revisarServicios',
    data: function(){
      //  Busqueda="/Search/"+this.params.searchName;
        Seleccion=this.params.Seleccion;
        console.log(Seleccion);
        //Busqueda=this.params.searchName;
        //return Servicios.find({"tipServ": {$regex: ".*" + Busqueda + ".*"}}).fetch();
      }
} );


/*
Router.route('/items/:itemName', {
    name: 'itemDetails',
    data: function(){
        return {
            item: Items.findOne(this.params.query.id),
            itemName: this.params.itemName
        };
    }
);*/



//Router.route('/LogIn',{name:'logIn'});

//Router.route('/Start',{name:'search'});
