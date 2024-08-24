function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
    
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");

}

function validacion(){

    //obtengo los valores de los elementos y utilizo el recurso trim para eliminar espacios en blanco
    let nombre = document.getElementById("nombre").value.trim();

    let apellido = document.getElementById("apellido").value.trim();

    let email = document.getElementById("email").value.trim();

    //obtengo los valores de las contraseñas pero sin utilizar trim porque estas admiten espacios

    let password1 = document.getElementById("password1").value;

    let password2 = document.getElementById("password2").value;

    //obtengo el status de "marcado o desmarcado" de la casilla checkbox
    let terminos = document.getElementById("terminos").checked; 

    /*Para validar los datos, debemos comprobar que nombre y apellido no estén vacíos, que la longitud de password1
     sea al menos 6 caracteres, que password1 sea igual a password2 y qué los términos  este aceptado*/
if(!nombre || !apellido || !email || !password1 || !password2){
    showAlertError();
    return;
}

//largo de contraseña:
if (password1.length < 6) {
    showAlertError();
    return;
}

//comparar contraseñas
if(password1 !== password2) {
    showAlertError();
    return;
}

//si se cumplen las condiciones
showAlertSuccess();
}; 


document.getElementById("regBtn").addEventListener("click", validacion);
