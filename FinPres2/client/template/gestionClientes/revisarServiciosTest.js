import {getMecanicData} from "./revisarServicios.js";

export const TestRevBananaOso = () => {
  expResult='0';
  actuRestult = getMecanicData('Banana','Oso');
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+actuRestult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestRevMarceloLavLlantas = () => {
  expResult='1';
  actuRestult = getMecanicData('Marcelo Reyes','Lavado llantas');
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+actuRestult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestRevSOSLavLlantas = () => {
  expResult='0';
  actuRestult = getMecanicData('SOS','Lavado llantas');
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+actuRestult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}


export const TestRevSOSLavCoche = () => {
  expResult='1';
  actuRestult = getMecanicData('SOS','Lavado Coche');
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+actuRestult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestRevSOSNumbers = () => {
  expResult='0';
  actuRestult = getMecanicData('SOS','123456');
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+actuRestult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestRev123Servicio = () => {
  expResult='0';
  actuRestult = getMecanicData('123','Servicio');
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+actuRestult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestRevLetrasNegativas = () => {
  expResult='0';
  actuRestult = getMecanicData('-123','-lavado');
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+actuRestult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}
