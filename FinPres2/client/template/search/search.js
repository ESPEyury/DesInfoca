import * as test from "./searchTest.js";


Template.searchSom.events({
    'click .buscaA' (){
      if(Meteor.user()){
        if(Meteor.user().username.indexOf("ADMIN") == -1){
          if(Busqueda==""){
            swal('Campo vacio','Completa el cuadro de busqueda', 'error');
          }else{
            Router.go('/Search/'+Busqueda);
          }

        }else{
          swal('Solicitud denegada','Los administradores no tienen acceso a este modulo', 'error');
        }
      }else{
        swal('Aun no has iniciado sesión?','Inicia sesion para continuar...', 'question');
      }
    },
});

export const setBusqueda = (palabraBusqueda) => {
  if(!palabraBusqueda){
    return 'Busqueda Vacia';
  }
  Busqueda=palabraBusqueda;
  if(isNaN(Busqueda)==true){
    return Busqueda;
  }else{
    return('Busqueda No Valida');
  }
};
