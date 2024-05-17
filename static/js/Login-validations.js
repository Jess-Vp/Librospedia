function loginValidation (){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var isValid = true;


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

    // Devolver true si todos los campos son válidos, de lo contrario, false
    return isValid;
    
}


document.getElementById("formLogin").addEventListener("submit", function(event) {
    if (!loginValidation()) {
        event.preventDefault();
    }
});



    











    

