import {insertData} from "./gestionarServicios.js";


export const testDataNormal = () => {
  expectedR=1;
  actualR=insertData('Mecanico','No','Cambio de llantas','Mecanico con servicios varios','1344','Cumbaya')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testNumerosEnDescripcion = () => {
  expectedR=1;
  actualR=insertData('Mecanico','No','Cambio de aceite','312315','1344','Cumbaya')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testNumerosEnCosto = () => {
  expectedR=1;
  actualR=insertData('Mecanico','No','Balanceo de llantas','Mecanico con servicios varios','1344','Cumbaya')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testNumerosEnTipoServicio = () => {
  expectedR=0;
  actualR=insertData('Mecanico','No','8931209','Mecanico con servicios varios','1344','Cumbaya')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testNumerosEnSucurcal = () => {
  expectedR=0;
  actualR=insertData('Mecanico','No','Cambio de liquidos','Mecanico con servicios varios','1344','Cumbaya')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testNumerosNegativosEnCosto = () => {
  expectedR=0;
  actualR=insertData('Mecanico','No','','Mecanico con servicios varios','-1344','Cumbaya')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
export const testLetrasEnCosto = () => {
  expectedR=0;
  actualR=insertData('Mecanico','No','Alineacion','Mecanico con servicios varios','Mil','Cumbaya')
  if(expectedR==actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
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
  expectedR=true;
  actualR=validarNumeros('Hola');
  if(expectedR!=actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }

export const testvalidarNumerosNegativos = ()=>{
  expectedR=true;
  actualR=validarNumeros('-500');
  if(expectedR!=actualR){
    console.log('Prueba Aprobada');
  }else{
    console.log('Prueba Fallida, resultado:'+actualR);
  }
}
}
