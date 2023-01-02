import validator from './validator.js';

//Crear una variable extrayendo el elemento con el id ingresar tarjeta
const ingresarCard = document.getElementById("formulario");

ingresarCard.addEventListener("submit", (event) => {
    event.preventDefault()
    const creditCardNumber = document.getElementById("card-number").value;
    const check = validator.isValid(creditCardNumber);
    if (creditCardNumber === '') {
        alert('Por favor llene todos los campos.')
    } else {
        //Mostrar resultado en la pantalla, si es true = válida, si es false = inválida
        if (check === true) {
            const verify = validator.maskify(creditCardNumber);
            alert(verify);
            const validResults = document.getElementById("validResults");
            //Mostrar mensaje de pago exitoso
            validResults.innerHTML = '<br><br><h4> Thank you! <br> Your purchase was succesful. <br><br> <img src="correct-icon.png" alt="Correct-Icon" style="width:50px;height:50px;" </h4>';
            document.getElementById("paymentDetails").outerHTML = "";
            document.getElementById("card").outerHTML = "";
            document.getElementById("card-reversed").outerHTML = "";
            document.getElementById("ingresar").outerHTML = "";
        } else {
            const verify2 = validator.maskify(creditCardNumber);
            alert(verify2);
            const invalidResults = document.getElementById("validResults");
            //Mostrar mensaje de pago rechazado
            invalidResults.innerHTML = '<br><br><h4> Payment unsuccesful. <br> Please try again. <br><br> <img src="incorrect-icon.png" alt="Incorrect-Icon" style="width:50px;height:50px;" </h4>';
            document.getElementById("paymentDetails").outerHTML = "";
            document.getElementById("card").outerHTML = "";
            document.getElementById("card-reversed").outerHTML = "";
            document.getElementById("ingresar").outerHTML = "";
        }


        //-----------Crear una condición que no deje ingresar menos de 13 números ni más de 16 números----------
        if (creditCardNumber.length < 13 || creditCardNumber.length > 16) {
            alert('El número de tarjeta debe llevar entre 13 y 16 digitos.');
        } else {
            return false;
        }
        return false;
    }
});








