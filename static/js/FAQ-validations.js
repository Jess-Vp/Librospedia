function faqValidation (){
    var subject = document.getElementById("subject").value;
    var name = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;
    var mailingCheckbox = document.getElementById("mailing").value;
    var subjectError = document.getElementById("subjectError");
    var nameError = document.getElementById("nameError");
    var lastnameError = document.getElementById("lastnameError");
    var emailError = document.getElementById("emailError");
    var commentError = document.getElementById("commentError");
    var mailingError = document.getElementById("mailingError");
    var isValid = true;

    // Validacion del campo asunto - subject
    if (subject.trim() == "") {
        subjectError.textContent = "Por favor, seleccione un asunto.";
        isValid = false;
    } else {
        subjectError.textContent = "";
    }

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
        lastnameError.textContent = "Por favor, ingrese su apellido.";
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

    // Validacion del campo comentario

    if(comment.trim() == ""){
        commentError.textContent = "Por favor ingrese su mensaje";
        isValid = false;
    }else{
        commentError.textContent = "";
    }

    // Validacion campo mailing checkbox 
    if (!mailingCheckbox.checked) {
        // Si el checkbox no está marcado, mostrar mensaje de error
        mailingError.textContent = "Por favor, acepte nuestros términos.";
        isValid = false;
    } else {
        mailingError.textContent = "";
    }


    // Devolver true si todos los campos son válidos, de lo contrario, false
    return isValid;
    
}


document.getElementById("formFaq").addEventListener("submit", function(event) {
    // Prevenir el envío del formulario si la validación no pasa
    if (!faqValidation()) {
        event.preventDefault();
    }
});



    











    

