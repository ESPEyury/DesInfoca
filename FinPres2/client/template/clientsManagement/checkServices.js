import * as test from "./checkServicesTest.js";


Template.checkServices.helpers({
  //permite tomar la informacion de un service en especifico
       Review() {
            return Services.find({"_id": {$regex: ".*" + Selection + ".*"}}).fetch();
      },
});


Template.checkServices.events({
  //Registra en la base de datos el service Seleccionado y presenta una vista de la informacion de contacto
       'submit form':function (event) {
         // Prevent default browser form submit
         event.preventDefault();
         var contactNumber = Mechanics.findOne({"mechanicName": {$regex: ".*" + Mecanica + ".*"}}).phoneNumber;
         var typeUser = UserG;
         var mechanicName=Services.findOne({"_id": {$regex: ".*" + Selection + ".*"}}).mechanicName;
         var serviceType = Services.findOne({"_id": {$regex: ".*" + Selection + ".*"}}).serviceType;
         var description = Services.findOne({"_id": {$regex: ".*" + Selection + ".*"}}).description;
         var cost  = Services.findOne({"_id": {$regex: ".*" + Selection + ".*"}}).cost;
         var branch = Services.findOne({"_id": {$regex: ".*" + Selection + ".*"}}).branch;
         ServicesUser.insert({
           typeUser,
           mechanicName,
           serviceType,
           description,
           cost,
           branch,
           contactNumber,
           createdAt: new Date(),
         });
         swal(typeUser+'! aqui tienes la informacion De Contacto','Servicio: '+serviceType+"\n En la mecanica: "+mechanicName +'\n Numero de Contacto: '+contactNumber+'\n ', 'info');
         //alert("Numero de Contacto: "+numbe);
         },
});


//Metodo utilizado para realizar pruebas respecto a la busqueda de un service en comun
export const getMecanicData = (mechanicName, service) => {
  //var contactNumber = Mechanics.findOne({"nomMe": {$regex: ".*" + mecaAs + ".*"}}).tele;
  //var idServicio=Services.findOne({"mecaAs": mecaAs},{"tipServ": servi})._id;
  if(Services.find({mechanicName: mechanicName ,serviceType: service}).count()===0){
    return '0';
  }else{
    return '1';
  }
};
