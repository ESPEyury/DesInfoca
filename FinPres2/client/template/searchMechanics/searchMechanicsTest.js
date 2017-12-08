import {coutSearch} from "./searchMechanics.js";

export const TestSearchMechanicBanana = () => {
  expResult=0;
  actuRestult = coutSearch('Banana');
  if(expResult===actuRestult){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestSearchMechanicNegatives = () => {
  expResult=0;
  actuRestult = coutSearch(-10);
  if(expResult===actuRestult){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestSearchMechanicNumbers = () => {
  expResult=0;
  actuRestult = coutSearch(10);
  if(expResult===actuRestult){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestSearchMechanicLavado = () => {
  expResult=1;
  actuRestult = coutSearch('Lavado');
  if(expResult===actuRestult){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}

export const TestSearchMechanicEmpty = () => {
  expResult=0;
  actuRestult = coutSearch('');
  if(expResult===actuRestult){
    console.log('Prueba Aprovada, resultado:'+expResult);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}
