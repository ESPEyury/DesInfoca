import {insertData} from "./revisarServicios.js";


export const TestSearchBanana = () => {
  expResult='Banana';
  actuRestult = setBusqueda('Banana');
  if(actuRestult.localeCompare(expResult)==0){
    console.log('Prueba Aprovada, resultado:'+Busqueda);
  }else{
    console.log('Prueba Fallida, resultado:'+actuRestult);
  }
}
