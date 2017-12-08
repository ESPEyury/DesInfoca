import * as test from "./searchTest.js";


Template.searchSom.events({
      /*        'click .logout': function(event){
                  event.preventDefault();
                  Meteor.logout();
              },
              */


            'click .buscaA' (){
            //  Busqueda= "/Search/"+event.target.Search.value;
              Router.go('/Search/'+Busqueda);
            },
/*
             'submit form':function (event) {

                  Busqueda=event.target.Search.value;
                  alert("el valor de tu bsuqueda es: "+Busqueda);
                  alert("el valor de tu bsuqueda es: "+event.target.Search.value);
                  console.log(Busqueda);
                //  Router.go('searchMechanics', {search: 'foo'}, {query: 'id='+Busqueda});
                  //Router.go('searchMechanics', {itemName: itemName})
                 Busqueda= "/Search/"+event.target.Search.value;
                  //console.log(Template.currentData());
                },
*/
});

export const setBusqueda = (palabraBusqueda) => {
  if(!palabraBusqueda){
    //alert("Vacio");
    return 'Busqueda Vacia';
  }
  Busqueda=palabraBusqueda;
  if(isNaN(Busqueda)==true){
    return Busqueda;
  }else{
    return('Busqueda No Valida');
  }
};
