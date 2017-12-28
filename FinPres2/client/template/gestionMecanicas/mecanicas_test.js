import {validarcedula_t} from "./gesMecas.js";

export const validarcedula_test_valida= () => {
  expected = "Cedula valida";
  actual = "1723502231";
  result = validarcedula_t(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_incompleta= () => {
  expected = "Cedula no valida";
  actual = "1723";
  result = validarcedula_t(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_mayor_a_10digitos= () => {
  expected = "Cedula no valida";
  actual = "1723502223123";
  result = validarcedula_t(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_negativa= () => {
  expected = "Cedula no valida";
  actual = "-1723502223";
  result = validarcedula_t(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_caracter= () => {
  expected = "Cedula no valida";
  actual = "-a723502223";
  result = validarcedula_t(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_caracteres= () => {
  expected = "Cedula no valida";
  actual = "1a2s3d5f4t7e5e";
  result = validarcedula_t(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_vacia= () => {
  expected = "Cedula no valida";
  actual = "";
  result = validarcedula_t(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_pichincha= () => {
  expected = "Cedula valida";
  actual = "1710330265";
  result = validarcedula_t(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_imbabura= () => {
  expected = "Cedula valida";
  actual = "1004049258";
  result = validarcedula_t(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_imbabura_novalida= () => {
  expected = "Cedula no valida";
  actual = "1004049259";
  result = validarcedula_t(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
