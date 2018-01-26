import {getMecanicData} from "./checkServices.js";

export const TestRevBananaOso = () => {
  expResult='0';
  actualRestult = getMecanicData('Banana','Oso');
  if(actualRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+actualRestult);
  }else{
    console.log('Prueba Fallida, resultado:'+actualRestult);
  }
}

export const TestRevMarceloLavLlantas = () => {
  expResult='1';
  actualRestult = getMecanicData('Marcelo Reyes','Lavado llantas');
  if(actualRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+actualRestult);
  }else{
    console.log('Prueba Fallida, resultado:'+actualRestult);
  }
}

export const TestRevSOSLavLlantas = () => {
  expResult='0';
  actualRestult = getMecanicData('SOS','Lavado llantas');
  if(actualRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+actualRestult);
  }else{
    console.log('Prueba Fallida, resultado:'+actualRestult);
  }
}


export const TestRevSOSLavCoche = () => {
  expResult='1';
  actualRestult = getMecanicData('SOS','Lavado Coche');
  if(actualRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+actualRestult);
  }else{
    console.log('Prueba Fallida, resultado:'+actualRestult);
  }
}

export const TestRevSOSNumbers = () => {
  expResult='0';
  actualRestult = getMecanicData('SOS','123456');
  if(actualRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+actualRestult);
  }else{
    console.log('Prueba Fallida, resultado:'+actualRestult);
  }
}

export const TestRev123Servicio = () => {
  expResult='0';
  actualRestult = getMecanicData('123','Servicio');
  if(actualRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+actualRestult);
  }else{
    console.log('Prueba Fallida, resultado:'+actualRestult);
  }
}

export const TestRevLetrasNegativas = () => {
  expResult='0';
  actualRestult = getMecanicData('-123','-lavado');
  if(actualRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+actualRestult);
  }else{
    console.log('Prueba Fallida, resultado:'+actualRestult);
  }
}
