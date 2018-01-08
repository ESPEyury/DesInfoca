Clientes = new Mongo.Collection('Clientes');
Mecanicos = new Mongo.Collection('Mecanicos');
Servicios = new Mongo.Collection('Servicios');
ServiciosUser= new Mongo.Collection('ServiciosUser');

//Nombre del usuario conectado
UserG="";
//Tipo de usuario conectado
TipoUserG="";
//Variable global de busqueda
Busqueda="";
//Seleccion de la mecanica en proceso
Mecanica="";
//id de la seleccion tomada del buscador
Seleccion="";
//ruta generada a partir de la seleccion
Ruta="";
