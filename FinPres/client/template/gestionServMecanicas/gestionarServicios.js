Template.gestionarServicios.events({
          'submit form':function (event) {
            // Prevent default browser form submit
            event.preventDefault();
            var tipouser = UserG;
            var mecaAs=Mecanica;
            var tipServ = event.target.TipServ.value;
            var descript = event.target.DescServ.value;
            var costo  = event.target.Cost.value;
            var sucursal = event.target.Sucursal.value;
            Servicios.insert({
              tipouser,
              mecaAs,
              tipServ,
              descript,
              costo,
              sucursal,
              createdAt: new Date(),
            });
            alert("Servicio Registrado con exito");
            event.target.TipServ.value = '';
            event.target.DescServ.value = '';
            event.target.Cost.value = '';
            event.target.Sucursal.value = '';
            },
        });
