import {setBusqueda} from "./search.js";

export const TestSearchBanana = () => {
  expResult='Banana';
  actuRestult = setBusqueda('Banana');
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+Busqueda);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestSearchEmpty = () => {
  expResult='Busqueda Vacia';
  actuRestult = setBusqueda('');
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestSearchServicio = () => {
  expResult='Servicio';
  actuRestult = setBusqueda('Servicio');
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestSearchNumbers = () => {
  expResult='Busqueda No Valida';
  actuRestult = setBusqueda(1234);
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestSearchNegativeNumbers = () => {
  expResult='Busqueda No Valida';
  actuRestult = setBusqueda(-8);
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}
export const TestSearchZero = () => {
  expResult='Busqueda No Valida';
  actuRestult = setBusqueda(0);
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}
export const TestSearchAlphanumeric = () => {
  expResult='Busqueda No Valida';
  actuRestult = setBusqueda('07j0fh');
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}
export const TestSearchNegativeLetters = () => {
  expResult='Busqueda No Valida';
  actuRestult = setBusqueda('-a');
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}
export const TestSearchMecanica = () => {
  expResult='Busqueda No Valida';
  actuRestult = setBusqueda('Mecanica');
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}
