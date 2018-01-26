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
export const testNumerosEnDescripcion = () => {
  expectedR=1;
  actualR=insertData('Mecanico','No','Cambio de aceite','312315','1344','Sucursal Centro')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testNumerosEnCosto = () => {
  expectedR=1;
  actualR=insertData('Mecanico','No','Balanceo de llantas','Mecanico con servicios varios','1344','Sucursal Sur')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testNumerosEnTipoServicio = () => {
  expectedR=0;
  actualR=insertData('Mecanico','No','8931209','Mecanico con servicios varios','1344','Sucursal Sur')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testNumerosEnSucurcal = () => {
  expectedR=0;
  actualR=insertData('Mecanico','No','Cambio de liquidos','Mecanico con servicios varios','1344','Sucursal Sur')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testNumerosNegativosEnCosto = () => {
  expectedR=0;
  actualR=insertData('Mecanico','No','','Mecanico con servicios varios','-1344','Sucursal Centro')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testLetrasEnCosto = () => {
  expectedR=0;
  actualR=insertData('Mecanico','No','Alineacion','Mecanico con servicios varios','Mil','Sucursal Norte')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testNumerosEnTodo = () => {
  expectedR=1;
  actualR=insertData('312','231','315','4234','1344','2342')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testCeroNegativoEnTodo = () => {
  expectedR=1;
  actualR=insertData('-0','-0','-0','-0','-0','-0')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
// PRUEBAS VALIDAR NUMEROS
export const testvalidarNumeros = () => {
  expectedR=true;
  actualR=validarNumeros('20');
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}

export const testvalidarNumerosConLetras = () => {
  expectedR=false;
  actualR=validarNumeros('Hol9');
  if(expectedR!=actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}

export const testvalidarNumerosNegativos = ()=>{
  expectedR=false;
  actualR=validarNumeros('-500');
  if(expectedR!=actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}

export const testvalidarSoloLetras = ()=>{
  expectedR=false;
  actualR=validarNumeros('banana');
  if(expectedR!=actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}

export const testvalidarCero = ()=>{
  expectedR=false;
  actualR=validarNumeros('0');
  if(expectedR!=actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}

export const testvalidarSimbolos = ()=>{
  expectedR=false;
  actualR=validarNumeros('$%6');
  if(expectedR!=actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testvalidarNumerosMedianos = () => {
  expectedR=true;
  actualR=validarNumeros('2000');
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testvalidarNumerosDecimales = () => {
  expectedR=true;
  actualR=validarNumeros('2000.50');
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testvalidarLetrasNegativas = () => {
  expectedR=true;
  actualR=validarNumeros('-aros');
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
