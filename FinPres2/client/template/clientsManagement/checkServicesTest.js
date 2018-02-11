import {getMechanicData} from "./checkServices.js";

export const TestRevBananaOso = () => {
  expResult='0';
  actualResult = getMechanicData('Banana','Oso');
  if(actualResult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+actualResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actualResult);
  }
}

export const TestRevMarceloLavTires = () => {
  expResult='1';
  actualResult = getMechanicData('Marcelo Reyes','Lavado llantas');
  if(actualResult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+actualResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actualResult);
  }
}

export const TestRevSOSLavTires = () => {
  expResult='0';
  actualResult = getMechanicData('SOS','Lavado llantas');
  if(actualResult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+actualResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actualResult);
  }
}


export const TestRevSOSLavCoche = () => {
  expResult='1';
  actualResult = getMechanicData('SOS','Lavado Coche');
  if(actualResult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+actualResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actualResult);
  }
}

export const TestRevSOSNumbers = () => {
  expResult='0';
  actualResult = getMechanicData('SOS','123456');
  if(actualResult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+actualResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actualResult);
  }
}

export const TestRev123Service = () => {
  expResult='0';
  actualResult = getMechanicData('123','Servicio');
  if(actualResult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+actualResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actualResult);
  }
}

export const TestRevNegativeLetters = () => {
  expResult='0';
  actualResult = getMechanicData('-123','-lavado');
  if(actualResult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+actualResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actualResult);
  }
}
