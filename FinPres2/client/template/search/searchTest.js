import {setSearch} from "./search.js";

export const TestSearchBanana = () => {
  expResult='Banana';
  actuRestult = setSearch('Banana');
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+Busqueda);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestSearchEmpty = () => {
  expResult='Busqueda Vacia';
  actuRestult = setSearch('');
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestSearchServicio = () => {
  expResult='Servicio';
  actuRestult = setSearch('Servicio');
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestSearchNumbers = () => {
  expResult='Busqueda No Valida';
  actuRestult = setSearch(1234);
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestSearchNegativeNumbers = () => {
  expResult='Busqueda No Valida';
  actuRestult = setSearch(-8);
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}
export const TestSearchZero = () => {
  expResult='Busqueda No Valida';
  actuRestult = setSearch(0);
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}
export const TestSearchAlphanumeric = () => {
  expResult='Busqueda No Valida';
  actuRestult = setSearch('07j0fh');
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}
export const TestSearchNegativeLetters = () => {
  expResult='Busqueda No Valida';
  actuRestult = setSearch('-a');
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}
export const TestSearchMecanica = () => {
  expResult='Busqueda No Valida';
  actuRestult = setSearch('Mecanica');
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}
