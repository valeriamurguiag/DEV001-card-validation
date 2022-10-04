const validator = {
  //..
  isValid(creditCardNumber) {
    //Convertir el número de tarjeta en un array
    const arr = creditCardNumber.split('');
    //Convertir el array en un array de número
    const arrOfNum = arr.map(str => {
      return Number(str);
    });
    //Mostrar en consola
    console.log('La tarjeta en arreglo es: ' + arrOfNum);
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
    //Mostrar en consola
    console.log(`Los dígitos en posiciones pares, multiplicados por 2 son: ${currentDigit}`); 
      }
  }
  console.log(`La suma total de las posiciones pares, multiplicadas por 2 es: ${totalMultipliedDigits}`);


  //--------------Buscar los dígitos con posiciones impares-------------
  //Establecer la suma total de impares en cero
  let totalNonMultipliedDigits = 0;
  //Recorrer todo el arreglo
  for (let i = 0; i < arrOfNum.length; i++){
    let currentDigit2 = (arrOfNum[i]);
     //Establecer la condición => dígitos con posición impar
     if (i % 2 === 0) {
      totalNonMultipliedDigits += currentDigit2;
      //Mostrar en la consola
      console.log(`Los dígitos en posiciones impares son: ${currentDigit2}`)
    }
 }
 console.log(`La suma total de las posiciones impares es: ${totalNonMultipliedDigits}`);
 //Sumar totales
 let total = totalMultipliedDigits + totalNonMultipliedDigits;
 //Mostrar suma TOTAL en la consola (todos los dígitos)
 console.log(`La suma total es: ${total}`);
 //Validar tarjeta con un if que regrese true o false
 if (total % 10 === 0){
  return true;
  }
  return false;
 }
};
export default validator;
