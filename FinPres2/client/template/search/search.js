import * as test from "./searchTest.js";


Template.searchSom.events({
    'click .buscaA' (){
      if(Meteor.user()){
        if(Meteor.user().username.indexOf("ADMIN") == -1){
          if(GLOBAL_SEARCH==""){
            swal('Campo vacio','Completa el cuadro de busqueda', 'error');
          }else{
            Router.go('/Search/'+GLOBAL_SEARCH);
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
  GLOBAL_SEARCH=searchWord;
  if(isNaN(GLOBAL_SEARCH)==true){
    return GLOBAL_SEARCH;
  }else{
    return('Busqueda No Valida');
  }
};
