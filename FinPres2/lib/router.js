Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  /*notFoundTemplate: 'notFound'*/
});
Router.route('/',{name:'searchSom'});
Router.route('/Registrar',{name:'signUp'});
Router.route('/Acerca',{name:'about'});
Router.route('/Ayuda',{name:'help'});
Router.route('/MecanicServ', {name: 'mainServices'});
Router.route('/GesServ', {name: 'gestionarServicios'});
Router.route('/GesServCon', {name: 'consultarServicios'});
Router.route('/GesServMod', {name: 'modificarServicios'});
Router.route('/GesUser', {name: 'consultarServiciosContratados'});
Router.route('/GesAdmin', {name: 'mainAdmin'});
Router.route('/GesMen', {name: 'gesMen'});
Router.route('/GesCli', {name: 'consultarClientes'});
Router.route('/GesMenCon', {name: 'consultarMecanicas'});
Router.route('/GesMenMod', {name: 'modificarMecanicas'});

Router.route('/RevServs/:seleccion', {
    name: 'revisarServicios',
    data: function(){
        Seleccion=this.params.seleccion;
        console.log(Seleccion);
        return Servicios.find({"_id": {$regex: ".*" + Seleccion + ".*"}}).fetch();
      }
} );

Router.route( '/Search/:searchName', {
    name: 'searchMechanics',
    data: function(){
        Busqueda="/Search/"+this.params.searchName;
      }
} );
