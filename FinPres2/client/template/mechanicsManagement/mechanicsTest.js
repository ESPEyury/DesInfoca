import {validateDni} from "./mechanicsManagement.js";

export const validarcedula_test_valida= () => {
  expected = "Cedula valida";
  actual = "1723502231";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_valida2= () => {
  expected = "Cedula valida";
  actual = "1723502223";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_incompleta= () => {
  expected = "Cedula no valida";
  actual = "1723";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_incompleta_3digitos= () => {
  expected = "Cedula no valida";
  actual = "172";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_mayor_a_10digitos= () => {
  expected = "Cedula no valida";
  actual = "1723502223123";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_mayor_a_15digitos= () => {
  expected = "Cedula no valida";
  actual = "172350222312345358";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_mayor_a_20digitos= () => {
  expected = "Cedula no valida";
  actual = "17235022231234535827578685";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_negativa= () => {
  expected = "Cedula no valida";
  actual = "-1723502223";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_negativa_invalida= () => {
  expected = "Cedula no valida";
  actual = "-1723502222";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_caracter= () => {
  expected = "Cedula no valida";
  actual = "-a723502223";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_caracter_especial= () => {
  expected = "Cedula no valida";
  actual = "-*723502223";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_caracter_especial_operacion= () => {
  expected = "Cedula no valida";
  actual = "+723502223";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_caracteres= () => {
  expected = "Cedula no valida";
  actual = "/*-+1723502231";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_caracteres_alternados= () => {
  expected = "Cedula no valida";
  actual = "1a2s3d5f4t7e5e";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_vacia= () => {
  expected = "Cedula no valida";
  actual = "";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_sin_numeros= () => {
  expected = "Cedula no valida";
  actual = "asddasdasd";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_otros_caracteres= () => {
  expected = "Cedula no valida";
  actual = "?<>{}[]_-!#~";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_pichincha= () => {
  expected = "Cedula valida";
  actual = "1710330265";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const validarcedula_test_imbabura= () => {
  expected = "Cedula valida";
  actual = "1004049258";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_imbabura_novalida= () => {
  expected = "Cedula no valida";
  actual = "1004049259";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_carchi= () => {
  expected = "Cedula valida";
  actual = "0400688735";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_manabi= () => {
  expected = "Cedula valida";
  actual = "1303753618";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_napo= () => {
  expected = "Cedula valida";
  actual = "1706172648";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_azuay= () => {
  expected = "Cedula valida";
  actual = "0100967652";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_loja= () => {
  expected = "Cedula valida";
  actual = "1103037048";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_chimborazo= () => {
  expected = "Cedula valida";
  actual = "0200982163";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_guayas= () => {
  expected = "Cedula valida";
  actual = "0913537742";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_eloro= () => {
  expected = "Cedula valida";
  actual = "0702648551";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_orellana= () => {
  expected = "Cedula valida";
  actual = "1103756134";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_losrios= () => {
  expected = "Cedula valida";
  actual = "0200562791";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_pastaza= () => {
  expected = "Cedula valida";
  actual = "1303292583";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_cotopaxi= () => {
  expected = "Cedula valida";
  actual = "1711402980";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_stodomingo= () => {
  expected = "Cedula valida";
  actual = "1803538246";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_canar= () => {
  expected = "Cedula valida";
  actual = "0301506044";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_tungurahua= () => {
  expected = "Cedula valida";
  actual = "0602863730";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_staelena= () => {
  expected = "Cedula valida";
  actual = "0603224544";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_zamora= () => {
  expected = "Cedula valida";
  actual = "0104091285";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_bolivar= () => {
  expected = "Cedula valida";
  actual = "0201338787";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_morona= () => {
  expected = "Cedula valida";
  actual = "0102684529";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_esmeraldas= () => {
  expected = "Cedula valida";
  actual = "0800726424";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_galapagos= () => {
  expected = "Cedula valida";
  actual = "0100951987";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
export const validarcedula_test_sucumbios= () => {
  expected = "Cedula valida";
  actual = "1704426145";
  result = validateDni(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
