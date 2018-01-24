Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});
Router.route('/',{name:'searchSom'});
Router.route('/Registrar',{name:'signUp'});
Router.route('/Acerca',{name:'about'});
Router.route('/Ayuda',{name:'help'});
Router.route('/MecanicServ', {name: 'mainServices'});
Router.route('/GesServ', {name: 'gestionarServicios'});
Router.route('/GesServCon', {name: 'consultarServicios'});
Router.route('/GesServMod', {name: 'modifyServices'});
Router.route('/GesUser', {name: 'consultHiredServices'});
Router.route('/GesAdmin', {name: 'mainAdmin'});
Router.route('/GesMen', {name: 'mechanicsManagement'});
Router.route('/GesCli', {name: 'consultClients'});
Router.route('/GesMenCon', {name: 'consultMechanics'});
Router.route('/GesMenMod', {name: 'modifyMechanics'});
Router.route('/RevServs/:seleccion', {
    name: 'checkServices',
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
