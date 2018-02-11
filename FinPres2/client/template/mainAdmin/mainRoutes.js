//added sesionAdministrador.js routes on an single implementation
Template.mainServices.events({

  'click #RegServ':function(event){
    Router.go('/GesServ');
    },
  'click #ConsServ':function(event){
    Router.go('/GesServCon');
    },
  'click #ModServ':function(event){
    Router.go('/GesServMod');
    },
  'click #BuscSer':function(event){
    Router.go('/');
    },
  'click #RevServ':function(event){
    Router.go('/GesUser');
    },
  'click #RegMecani':function(event){
    Router.go('/GesMen');
    },
  'click #ConsMeca':function(event){
    Router.go('/GesMenCon');
    },
  'click #ModMeca':function(event){
    Router.go('/GesMenMod');
    },
  'click #ConsUser':function(event){
    Router.go('/GesCli');
    },
});
