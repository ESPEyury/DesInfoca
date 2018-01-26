Template.mainAdmin.events({

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
