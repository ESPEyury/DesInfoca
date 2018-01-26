import * as test from "./searchTest.js";


Template.searchSom.events({
    'click .buscaA' (){
      if(Meteor.user()){
        if(Meteor.user().username.indexOf("ADMIN") == -1){
          if(Search==""){
            swal('Campo vacio','Completa el cuadro de busqueda', 'error');
          }else{
            Router.go('/Search/'+Search);
          }
        }else{
          swal('Solicitud denegada','Los administradores no tienen acceso a este modulo', 'error');
        }
      }else{
        swal('Aun no has iniciado sesión?','Inicia sesion para continuar...', 'question');
      }
    },
});

export const setSearch = (searchWord) => {
  if(!searchWord){
    return 'Busqueda Vacia';
  }
  Search=searchWord;
  if(isNaN(Search)==true){
    return Search;
  }else{
    return('Busqueda No Valida');
  }
};
