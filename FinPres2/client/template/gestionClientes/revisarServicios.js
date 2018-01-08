import * as test from "./revisarServiciosTest.js";


Template.revisarServicios.helpers({
  //permite tomar la informacion de un servicio en especifico
       Revisar() {
            return Servicios.find({"_id": {$regex: ".*" + Seleccion + ".*"}}).fetch();
      },
});


Template.revisarServicios.events({
  //Registra en la base de datos el servicio seleccionado y presenta una vista de la informacion de contacto
       'submit form':function (event) {
         // Prevent default browser form submit
         event.preventDefault();
         var numeroContactoMecanica = Mecanicos.findOne({"nomMe": {$regex: ".*" + Mecanica + ".*"}}).tele;
         var tipouser = UserG;
         var mecaAs=Servicios.findOne({"_id": {$regex: ".*" + Seleccion + ".*"}}).mecaAs;;
         var tipServ = Servicios.findOne({"_id": {$regex: ".*" + Seleccion + ".*"}}).tipServ;
         var descript = Servicios.findOne({"_id": {$regex: ".*" + Seleccion + ".*"}}).descript;
         var costo  = Servicios.findOne({"_id": {$regex: ".*" + Seleccion + ".*"}}).costo;
         var sucursal = Servicios.findOne({"_id": {$regex: ".*" + Seleccion + ".*"}}).sucursal;
         ServiciosUser.insert({
           tipouser,
           mecaAs,
           tipServ,
           descript,
           costo,
           sucursal,
           numeroContactoMecanica,
           createdAt: new Date(),
         });
         swal(tipouser+'! aqui tienes la informacion De Contacto','Servicio: '+tipServ+"\n En la mecanica: "+mecaAs +'\n Numero de Contacto: '+numeroContactoMecanica+'\n ', 'info');
         //alert("Numero de Contacto: "+numbe);
         },
});


//Metodo utilizado para realizar pruebas respecto a la busqueda de un servicio en comun
export const getMecanicData = (mecaAs, servi) => {
  //var numeroContactoMecanica = Mecanicos.findOne({"nomMe": {$regex: ".*" + mecaAs + ".*"}}).tele;
  //var idServicio=Servicios.findOne({"mecaAs": mecaAs},{"tipServ": servi})._id;
  if(Servicios.find({mecaAs: mecaAs ,tipServ: servi}).count()===0){
    return '0';
  }else{
    return '1';
  }
};
