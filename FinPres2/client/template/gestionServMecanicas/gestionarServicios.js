Template.gestionarServicios.events({
          'submit form':function (event) {
            // Prevent default browser form submit
            event.preventDefault();
            var tipouser = UserG;
            var nombreMecanica=Mecanica;
            var tipoServicio = event.target.TipServ.value;
            var descripcion = event.target.DescServ.value;
            var costo  = event.target.Cost.value;
            var sucursal = event.target.Sucursal.value;
            Servicios.insert({
              tipouser,
              nombreMecanica,
              tipoServicio,
              descripcion,
              costo,
              sucursal,
              createdAt: new Date(),
            });
            swal('Exito', 'Servicio Registrado', 'success');
            //alert("Servicio Registrado con exito");
            event.target.TipServ.value = '';
            event.target.DescServ.value = '';
            event.target.Cost.value = '';
            event.target.Sucursal.value = '';
            },
        });


export const validarNumeros = (costo) =>{
           if(!isNaN(costo)){
             if(costo>0){
              return true;}
            /*else if (costo==0) {
              alert("Ingrese un valor mayor a 0");
            }*/
            else {
              return false;}
            }
          else {
            return false;
          }
};


export const insertData = (tipouser,mecaAs,tipServ,descript,costo,sucursal) =>{
  if(isNaN(tipouser)==true && isNaN(mecaAs)==true && isNaN(descript)==true && isNaN(sucursal)==true && validarNumeros(costo)==true )
  {
    Servicios.insert({
      tipouser,
      mecaAs,
      tipServ,
      descript,
      costo,
      sucursal,
      createdAt: new Date(),
    })
    return 1;
  }
  else {
    //alert("Revisar campos");
    return 0;
  }
};
