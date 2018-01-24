import * as test from "./checkServicesTest.js";


Template.checkServices.helpers({
  //permite tomar la informacion de un servicio en especifico
       Revisar() {
            return Servicios.find({"_id": {$regex: ".*" + Seleccion + ".*"}}).fetch();
      },
});


Template.checkServices.events({
  //Registra en la base de datos el servicio seleccionado y presenta una vista de la informacion de contacto
       'submit form':function (event) {
         // Prevent default browser form submit
         event.preventDefault();
         var numeroContactoMecanica = Mecanicos.findOne({"nombreMecanica": {$regex: ".*" + Mecanica + ".*"}}).telefono;
         var tipouser = UserG;
         var nombreMecanica=Servicios.findOne({"_id": {$regex: ".*" + Seleccion + ".*"}}).nombreMecanica;
         var tipoServicio = Servicios.findOne({"_id": {$regex: ".*" + Seleccion + ".*"}}).tipoServicio;
         var descripcion = Servicios.findOne({"_id": {$regex: ".*" + Seleccion + ".*"}}).descripcion;
         var costo  = Servicios.findOne({"_id": {$regex: ".*" + Seleccion + ".*"}}).costo;
         var sucursal = Servicios.findOne({"_id": {$regex: ".*" + Seleccion + ".*"}}).sucursal;
         ServiciosUser.insert({
           tipouser,
           nombreMecanica,
           tipoServicio,
           descripcion,
           costo,
           sucursal,
           numeroContactoMecanica,
           createdAt: new Date(),
         });
         swal(tipouser+'! aqui tienes la informacion De Contacto','Servicio: '+tipoServicio+"\n En la mecanica: "+nombreMecanica +'\n Numero de Contacto: '+numeroContactoMecanica+'\n ', 'info');
         //alert("Numero de Contacto: "+numbe);
         },
});


//Metodo utilizado para realizar pruebas respecto a la busqueda de un servicio en comun
export const getMecanicData = (mecaAs, servi) => {
  //var numeroContactoMecanica = Mecanicos.findOne({"nomMe": {$regex: ".*" + mecaAs + ".*"}}).tele;
  //var idServicio=Servicios.findOne({"mecaAs": mecaAs},{"tipServ": servi})._id;
  if(Servicios.find({nombreMecanica: mecaAs ,tipoServicio: servi}).count()===0){
    return '0';
  }else{
    return '1';
  }
};
