function Mensaje(formulario) {
    var usuario = formulario.nombre_cliente;
    var email = formulario.direccion_email;
    var modelo = formulario.canam
    var patron = /^[a-zA-ZÑñÁÉÍÓÚáéíóú\s]*$/

    if (usuario.value.search(patron)) {
        console.log("Ingrese solamente caracteres de la A a la Z");
    }
    else {
        console.log("Se esta procesando la peticion de " + usuario.value + " ...");
        console.log("Peticion procesada");
    }
    alert("Hola " + usuario.value + " Se te enviara mas informacion sobre los accesorios y del modelo " + modelo.value + " a tu email: " + email.value)
}