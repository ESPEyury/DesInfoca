Template.logIn.events({
    'submit form': function(event){
        event.preventDefault();
        var userVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(userVar, passwordVar);
        console.log("logeado");
    }
});
