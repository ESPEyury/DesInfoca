Clients = new Mongo.Collection('Clients');
Mechanics = new Mongo.Collection('Mechanics');
Services = new Mongo.Collection('Services');
ServicesUser= new Mongo.Collection('ServicesUser');

//Nombre del usuario conectado
GLOBAL_USER="";
//Tipo de usuario conectado
GLOBAL_TYPE_USER="";
//Variable global de GLOBAL_SEARCH
GLOBAL_SEARCH="";
//Seleccion de la GLOBAL_MECHANIC en proceso
GLOBAL_MECHANIC="";
//id de la seleccion tomada del buscador
GLOBAL_SELECTION="";
//ruta generada a partir de la seleccion
GLOBAL_ROUTE="";
