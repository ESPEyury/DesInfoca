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
