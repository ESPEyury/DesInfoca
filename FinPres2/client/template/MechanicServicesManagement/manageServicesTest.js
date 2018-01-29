import {insertData} from "./manageServices.js";
import {validateNumbers} from "./manageServices.js";


export const testDataNormal = () => {
  expectedR=1;
  actualR=insertData('Mecanico','No','Cambio de llantas','Mecanico con servicios varios','1344','Sucursal Sur')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testNumbersInDescription = () => {
  expectedR=1;
  actualR=insertData('Mecanico','No','Cambio de aceite','312315','1344','Sucursal Centro')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testNumbersInCost = () => {
  expectedR=1;
  actualR=insertData('Mecanico','No','Balanceo de llantas','Mecanico con servicios varios','1344','Sucursal Sur')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testNumbersInServiceType = () => {
  expectedR=0;
  actualR=insertData('Mecanico','No','8931209','Mecanico con servicios varios','1344','Sucursal Sur')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testNumbersInBranch = () => {
  expectedR=0;
  actualR=insertData('Mecanico','No','Cambio de liquidos','Mecanico con servicios varios','1344','Sucursal Sur')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testNegativeNumbersInCost = () => {
  expectedR=0;
  actualR=insertData('Mecanico','No','','Mecanico con servicios varios','-1344','Sucursal Centro')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testLettersInCost = () => {
  expectedR=0;
  actualR=insertData('Mecanico','No','Alineacion','Mecanico con servicios varios','Mil','Sucursal Norte')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testNumbersInAll = () => {
  expectedR=1;
  actualR=insertData('312','231','315','4234','1344','2342')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testNegativeZeroInAll = () => {
  expectedR=1;
  actualR=insertData('-0','-0','-0','-0','-0','-0')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
// PRUEBAS VALIDAR NUMEROS
export const testValidateNumbers = () => {
  expectedR=true;
  actualR=validateNumbers('20');
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}

export const testValidateNumbersAndLetters = () => {
  expectedR=false;
  actualR=validateNumbers('Hol9');
  if(expectedR!=actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}

export const testValidateNegativeNumbers = ()=>{
  expectedR=false;
  actualR=validateNumbers('-500');
  if(expectedR!=actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}

export const testValidateOnlyLetters = ()=>{
  expectedR=false;
  actualR=validateNumbers('banana');
  if(expectedR!=actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}

export const testValidateZero = ()=>{
  expectedR=false;
  actualR=validateNumbers('0');
  if(expectedR!=actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}

export const testValidateSimbols = ()=>{
  expectedR=false;
  actualR=validateNumbers('$%6');
  if(expectedR!=actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testValidateMediumNumbers = () => {
  expectedR=true;
  actualR=validateNumbers('2000');
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testValidateDecimalNumbers = () => {
  expectedR=true;
  actualR=validateNumbers('2000.50');
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testValidateNegativeLetters = () => {
  expectedR=true;
  actualR=validateNumbers('-aros');
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
