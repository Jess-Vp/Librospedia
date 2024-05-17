function registrationValidation (){
    var name = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var birthday = document.getElementById("birthday").value;
    var country = document.getElementById("country").value;
    var terms = document.getElementById("terms").value;
    var nameError = document.getElementById("nameError");
    var lastnameError = document.getElementById("lastnameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var birthdayError = document.getElementById("birthdayError");
    var countryError = document.getElementById("countryError");
    var termsError = document.getElementById("termsError");
    var isValid = true;

    
    // Validar del campo nombre
    if (name.trim() == "") {
        nameError.textContent = "Por favor, introduce tu nombre.";
        isValid = false;

    }else if(/(\d|\W)/.test(name.trim())){
        nameError.textContent = "Este no es un nombre correcto, debe contener solamente letras y no números o caracteres especiales"
        isValid = false;

    } else {
        nameError.textContent = "";
    }

    // Validacion del campo apellido

    if (lastname.trim() == "") {
        lastnameError.textContent = "Por favor, ingrese su apellido";
        isValid = false;
    }else if(/(\d|\W)/.test(lastname.trim())){
        lastnameError.textContent = "Este no es un apellido correcto, debe contener solamente letras y no números o caracteres especiales"
        isValid = false;
    } else {
        lastnameError.textContent = "";
    }

    // Validación del campo email

    if (email == "") {
        emailError.textContent = "Por favor, introduce tu email";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = "Por favor, introduce una dirección de email válida.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Validacion del campo password

    if (password.trim() == "" ) {
        passwordError.textContent = "Por favor, ingrese una contraseña"
        isValid = false;
    } else if ( /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)){
        passwordError.textContent = "Su contraseña debe contener al menos un número y un carácter especial "
        isValid = false;
        // Ponemos una condicion extra para verificar la long de las password
    }else if(password.length < 6 || password.length > 16){
        passwordError.textContent = "El texto tiene que ser mayor a 6 caracters y un máximo de 16 caracteres"
        isValid = false;

    }else {
        passwordError.textContent ="";
    }


    // Validacion campo birthday

    if (birthday.trim() == "") {
        birthdayError.textContent = "Por favor, ingrese su fecha de nacimiento";
        isValid = false;
    
    } else {
        // Verificar si la fecha de nacimiento es valida
        var today = new Date();
        var birthdayDate = new Date (birthday);

        if (birthdayDate >= today){
            // Si la fecha de cumple es igual o posterior a la fecha actual, se va a mostrar un mensaje de error
            birthdayError.textContent = "La fecha ingresada debe ser anterior a la fecha actual.";
            isValid = false;
        } else { 
            // Fecha de nac valida
            birthdayError.textContent = "";
        }

    }
    

    // Validacion campo country

    if (country.trim() == "") {
        countryError.textContent = "Por favor, seleccione un pais.";
        isValid = false;
    } else {
        countryError.textContent = "";
    }


   // Validacion campo terms

   if (!terms.checked) {
        // Si el checkbox no está marcado, mostrar mensaje de error
        termsError.textContent = "Por favor, acepte nuestros términos.";
        isValid = false;
    } else {
        termsError.textContent = "";
    }


    // Devolver true si todos los campos son válidos, de lo contrario, false
    return isValid;
    
}


document.getElementById("formRegister").addEventListener("submit", function(event) {
    // Prevenir el envío del formulario si la validación no pasa
    if (!registrationValidation()) {
        event.preventDefault();
    }
});
