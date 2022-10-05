import validator from './validator.js';

//Crear una variable extrayendo el elemento con el id ingresar tarjeta
const submitCard = document.getElementById("submit");
//----------------Añadir un evento listener con una función que llama a validator-----------------
submitCard.addEventListener("click", () => {
    //Crear una constante extrayendo valor del elemento con el id número de tarjeta
    const creditCardNumber = document.getElementById("card-number").value 
    //Llamar a validor
    validator.isValid(creditCardNumber);
    //Mostrar resultado en la pantalla, si es true = válida, si es false = inválida
    if (validator.isValid(creditCardNumber) === true) {
        const validResults = document.getElementById("validResults");
        //Mostrar mensaje de pago exitoso
        validResults.innerHTML = '<h1> ¡Compra realizada con éxito! <br><br> <img src="correct-icon.png" alt="Correct-Icon" style="width:80px;height:80px;" </h1>';
        document.getElementById("paymentDetails").outerHTML = "";
        document.getElementById("card").outerHTML = "";
        document.getElementById("card-reversed").outerHTML = "";
        document.getElementById("submit").outerHTML = "";
    } else {
        const invalidResults = document.getElementById("validResults");
        //Mostrar mensaje de pago rechazado
        invalidResults.innerHTML = '<h1> Lo sentimos. <br> La tarjeta que ingresaste no es válida. <br><br> <img src="incorrect-icon.png" alt="Incorrect-Icon" style="width:80px;height:80px;" </h1>';
        document.getElementById("paymentDetails").outerHTML = "";
        document.getElementById("card").outerHTML = "";
        document.getElementById("card-reversed").outerHTML = "";
        document.getElementById("submit").outerHTML = "";
    }

    validator.maskify(creditCardNumber);
    //-----------Crear una condición que no deje ingresar menos de 13 números ni más de 16 números----------
    if (creditCardNumber.length < 13 || creditCardNumber.length > 16){
        alert('El número de tarjeta debe llevar entre 13 y 16 digitos.');
    } else {
        return false;
    }
    return false;
});





