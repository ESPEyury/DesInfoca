Clients = new Mongo.Collection('Clients');
Mechanics = new Mongo.Collection('Mechanics');
Services = new Mongo.Collection('Services');
ServicesUser= new Mongo.Collection('ServicesUser');

//Nombre del usuario conectado
UserG="";
//Tipo de usuario conectado
TipoUserG="";
//Variable global de busqueda
Busqueda="";
//Seleccion de la mecanica en proceso
Mecanica="";
//id de la seleccion tomada del buscador
Selection="";
//ruta generada a partir de la seleccion
Ruta="";
