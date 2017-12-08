import * as test from "./revisarServiciosTest.js";


Template.revisarServicios.helpers({
       Revisar() {
          return Servicios.find({"_id": {$regex: ".*" + Seleccion + ".*"}}).fetch();
      },
});


Template.revisarServicios.events({
       'submit form':function (event) {
         // Prevent default browser form submit
         event.preventDefault();
         var numbe = Mecanicos.findOne({"nomMe": {$regex: ".*" + Mecanica + ".*"}}).tele;
         var tipouser = UserG;
         var mecaAs=Mecanica;
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
           numbe,
           createdAt: new Date(),
         });
         alert("Numero de Contacto: "+numbe);
         },
});

export const insertData = ( tipouser, mecaAs, tipServ, descript, costo, sucursal, numbe) => {
  ServiciosUser.insert({
    tipouser,
    mecaAs,
    tipServ,
    descript,
    costo,
    sucursal,
    numbe,
    createdAt: new Date(),
  });
};
