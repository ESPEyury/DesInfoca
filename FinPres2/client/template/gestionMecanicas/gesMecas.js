Template.gesMen.helpers({
       validacionBarraDeBusqueda() {


      },
});

Template.gesMen.rendered = function() {
    if(!this._rendered) {
      this._rendered = true;
      console.log('Template cargado por completo');
    /*  console.log("Corriendo despues de cargar");
    	if(Meteor.user()==null){
    		swal('ADVERTENCIA','Busqueda por barra de navegacion desactivada', 'warning');
    		Busqueda="";
    		Seleccion="";
    		Ruta="";
    		Router.go("/");
    	}else{
    		if(Meteor.user().username.indexOf("ADMIN")==-1){
    			swal('Intruso','Usted no tiene permisos para este modulo', 'error');
    			Busqueda="";
    			Seleccion="";
    			Ruta="";
    			Router.go("/");
    		}
    	}*/
    }

}


Template.gesMen.events({
          'submit form':function (event) {
            // Prevent default browser form submit
            event.preventDefault();
            var tipouser = UserG;
            var cedu = event.target.Cedula.value;
            var nom = event.target.Nombres.value;
            var ape  = event.target.Apellidos.value;
            var dir = event.target.Direccion.value;
            var ema = event.target.Email.value;
            var tele = event.target.Telefono.value;
            var nomMe = event.target.Mecanica.value;
            var pass = event.target.Pass.value;
            var sucur = event.target.Sucursal.value;
            console.log("PI-2: Nuevo mecanico sesión");
            console.log("PI-2.1: Leyendo los campos");
            if(isNaN(cedu)==false){
              console.log("PI-2.2: Validando cédula");
                if(Meteor.users.findOne({"username":{$regex: ".*" + cedu + ".*"}})){
                  var usuarioTemp=Meteor.users.findOne({"username":{$regex: ".*" + cedu + ".*"}}).username;

                }else{
                  var usuarioTemp="vacio";
                }
                console.log("PI-2.3: Buscando mecanicos ya registrados");
                //console.log("Sacado de la base de datos: "+ usuarioTemp);
                //console.log("Sacado del cliente: " +cedu);
                if(usuarioTemp==cedu){
                  alert("Mecanico ya registrado en la base de datos");
                  //console.log("PI-3.4: Mecanico ya existente, registro invalidado");
                }else{
                  Accounts.createUser({
                      username: cedu,
                      email: ema,
                      password: pass,
                  });
                  Mecanicos.insert({
                    tipouser,
                    cedu,
                    nom,
                    ape,
                    ema,
                    dir,
                    tele,
                    nomMe,
                    pass,
                    sucur,
                    createdAt: new Date(),
                  });
                  alert("Mecanico Registrado con exito");
                }
                console.log("PI-2.4: Registrando mecanico nuevo");
                console.log("PI-2.5: sesión: ",Meteor.user().username);
            }else{
              alert("Ingresa una cedula valida");
            }
            event.target.Email.value='';
            event.target.Cedula.value = '';
            event.target.Nombres.value = '';
            event.target.Apellidos.value = '';
            event.target.Direccion.value = '';
            event.target.Telefono.value = '';
            event.target.Mecanica.value = '';
            event.target.Pass.value = '';
            },
});



//Para pruebas unitarias
export const validarcedula_t = (cedula) => {
 var i;
 var acumulado;
 var instancia;
 acumulado=0;
 for (i=1;i<=9;i++)
 {
  if (i%2!=0)
  {
   instancia=cedula.substring(i-1,i)*2;
   if (instancia>9) instancia-=9;
  }
  else instancia=cedula.substring(i-1,i);
  acumulado+=parseInt(instancia);
 }
 while (acumulado>0)
  acumulado-=10;
 if (cedula.substring(9,10)!=(acumulado*-1))
 {
  return "Cedula no valida";
 }
 return "Cedula valida";
}
