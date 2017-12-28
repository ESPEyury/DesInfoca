import {control_login_t} from "./layout.js";

export const control_login_test_Mecanico= () => {
  expected = "usuario: Mecanico";
  actual = "1723502231";
  result = control_login_t(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const control_login_test_Administrador= () => {
  expected = "usuario: Administrador";
  actual = "ADMIN123";
  result = control_login_t(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const control_login_test_usuarioNormal= () => {
  expected = "usuario: Cliente";
  actual = "user123";
  result = control_login_t(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const control_login_test_SinUsuario= () => {
  expected = "usuario no encontrado";
  actual = "";
  result = control_login_t(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const control_login_test_Admin_minuscula= () => {
  expected = "usuario: Cliente";
  actual = "admin";
  result = control_login_t(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const control_login_test_cedula_negativa= () => {
  expected = "usuario: Cliente";
  actual = "-1723502231";
  result = control_login_t(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const control_login_test_cedula_caracter= () => {
  expected = "usuario: Cliente";
  actual = "17235*02231";
  result = control_login_t(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const control_login_test_cedula_caracter_final= () => {
  expected = "usuario: Cliente";
  actual = "1723502231-";
  result = control_login_t(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const control_login_test_admin_inicio= () => {
  expected = "usuario: Cliente";
  actual = "123ADMIN";
  result = control_login_t(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const control_login_test_admin_final= () => {
  expected = "usuario: Administrador";
  actual = "ADMINmauro";
  result = control_login_t(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}

export const control_login_test_entero_positivo_grande= () => {
  expected = "usuario: Cliente";
  actual = "1723502223123";
  result = control_login_t(actual);
  if(result === expected){
    console.log("Prueba realizada con exito");
  }else{
    console.log("Prueba fallida",actual," ",result);
  }
}
