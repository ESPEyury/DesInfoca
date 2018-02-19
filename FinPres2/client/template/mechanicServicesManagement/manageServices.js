Template.gestionarServicios.events({
          'submit form':function (event) {
            // Prevent default browser form submit
            /**
 *
 *  @type typeUser es el tipo de usuario
 *  @type mechanicName es el nombre de la mecanica
* @type serviceType es el servicio que ofrece la mecanica
  * @type description describe los rasgos del daño
   * @type cost describe el costo del trabajo a realizar
    * @type branch es el lugar donde esta la mecanica

 * @return {} no retorna
 */
            event.preventDefault();
            var typeUser = GLOBAL_USER;
            var mechanicName=GLOBAL_MECHANIC;
            var serviceType = event.target.ServiceType.value;
            var description = event.target.ServiceDescription.value;
            var cost  = event.target.Cost.value;
            var branch = event.target.Branch.value;

            var validate= insertData = (typeUser,mechanicName,serviceType,description,cost,branch);
           if (validate==1){
             swal('Exito', 'Servicio Registrado', 'success');
           }
           else {
             swal('Error', 'Servicio No Registrado', 'warning');
           }

            swal('Exito', 'Servicio Registrado', 'success');
            //alert("Servicio Registrado con exito");
            event.target.ServiceType.value = '';
            event.target.ServiceDescription.value = '';
            event.target.Cost.value = '';
            event.target.Branch.value = '';
            },
        });

        /**
         * @description valida que los costos sean positivos

         */
export const validateNumbers = (cost) =>{
           if(!isNaN(cost)){
             if(cost>0){
              return true;}
            else {
              return false;}
            }
          else {
            return false;
          }
};

/**
 * @description funcion que inserta a la base de datos el tipo de servicio
 *  @param {String} tipeuser typeUser es el tipo de usuario
 *   @param {String} mecanAs mechanicName es el nombre de la mecanica
 * @ @param {String}  serviceType es el servicio que ofrece la mecanica
  * @param {String} description describe los rasgos del daño
   * @param {double} cost describe el cost del trabajo a realizar
    * @param {String} branch es el lugar donde esta la mecanic
 */
export const insertData = (typeUser,mecaAs,tipServ,descript,cost,branch) =>{
  if(isNaN(typeUser)==true && isNaN(mecaAs)==true &&
      isNaN(descript)==true && isNaN(branch)==true &&
      validateNumbers(cost)==true )
  {
    Services.insert({
      typeUser,
      mecaAs,
      tipServ,
      descript,
      cost,
      branch,
      createdAt: new Date(),
    });
    return 1;
  }
  else {
    return 0;
  }
};
