const validator = {
  //..
  isValid(creditCardNumber) {
    //Convertir el número de tarjeta en un array
    const arr = creditCardNumber.split('');
    //Convertir el array en un array de número
    const arrOfNum = arr.map(str => {
      return Number(str);
    });
    //------------Buscar los dígitos con posiciones pares-----------
    //Establecer la suma total de pares en cero
    let totalMultipliedDigits = 0;
    //Recorrer todos los elementos del arreglo
    for (let i = 0; i < arrOfNum.length; i++){
      let currentDigit = (arrOfNum[i]);
      //Establecer la condición => dígitos con posición par
      if ((i+1) % 2 === 0) {
      //Establecer qué pasará cuando la multiplicación del dígito supere el número 9
      if ((currentDigit *= 2)  > 9) {
        currentDigit -= 9; 
      }
    //Añadir el resultado a la suma total
    totalMultipliedDigits += currentDigit;
      }
  }


  //--------------Buscar los dígitos con posiciones impares-------------
  //Establecer la suma total de impares en cero
  let totalNonMultipliedDigits = 0;
  //Recorrer todo el arreglo
  for (let i = 0; i < arrOfNum.length; i++){
    let currentDigit2 = (arrOfNum[i]);
     //Establecer la condición => dígitos con posición impar
     if (i % 2 === 0) {
      totalNonMultipliedDigits += currentDigit2;
    }
 }
 //Sumar totales
 let total = totalMultipliedDigits + totalNonMultipliedDigits;
 //Validar tarjeta con un if que regrese true o false
 if (total % 10 === 0){
  return true;
  } else {
  return false;
 }
},

//--------------Crear una función que reemplace los dígitos de la tarjeta con una máscara------------
maskify(creditCardNumber, n = 12, mask = '#') {
  //Regresar resultado con máscara
  if (creditCardNumber.length === 16) {
    return ('' + creditCardNumber).slice(0, n).replace(/./g, mask) + ('' + creditCardNumber).slice(n);
}
  if (creditCardNumber.length === 15) {
  n = 11;
  return ('' + creditCardNumber).slice(0, n).replace(/./g, mask) + ('' + creditCardNumber).slice(n);
}
  if (creditCardNumber.length === 14) {
    n = 10;
    return ('' + creditCardNumber).slice(0, n).replace(/./g, mask) + ('' + creditCardNumber).slice(n);
}
  if (creditCardNumber.length === 13) {
    n = 9;
    return ('' + creditCardNumber).slice(0, n).replace(/./g, mask) + ('' + creditCardNumber).slice(n);
}
  if (creditCardNumber.length === 12) {
    n = 8;
    return ('' + creditCardNumber).slice(0, n).replace(/./g, mask) + ('' + creditCardNumber).slice(n);
}
  if (creditCardNumber.length === 11) {
    n = 7;
    return ('' + creditCardNumber).slice(0, n).replace(/./g, mask) + ('' + creditCardNumber).slice(n);
}
if (creditCardNumber.length === 10) {
  n = 6;
  return ('' + creditCardNumber).slice(0, n).replace(/./g, mask) + ('' + creditCardNumber).slice(n);
}
if (creditCardNumber.length === 1) {
  n = 0;
  return ('' + creditCardNumber);
}
}
};
export default validator;

