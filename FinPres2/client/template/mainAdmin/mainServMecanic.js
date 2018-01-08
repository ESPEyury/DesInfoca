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
});
