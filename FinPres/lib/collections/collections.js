Clientes = new Mongo.Collection('Clientes');
Mecanicos = new Mongo.Collection('Mecanicos');
Servicios = new Mongo.Collection('Servicios');
ServiciosUser= new Mongo.Collection('ServiciosUser');
UserG="";
TipoUserG="";
Busqueda="";
Mecanica="";
Seleccion="";
Ruta="";
/*
Servicios._ensureIndex( { tipouser: 1, tipServ: 1, decript: 1 , costo: 1, sucursal:1} );

let Servicios = new SimpleSchema({
  'title': {
    type: String,
    label: 'The title of this album.'
  },
  'artist': {
    type: String,
    label: 'The artist of this album.'
  },
  'year': {
    type: String,
    label: 'The year this album was released.'
  }
});
*/
