function Mensaje(formulario){
    var usuario = formulario.nombre_cliente;
    var email = formulario.direccion_email;
    var modelo = formulario.canam

    alert("Hola " + usuario.value + " Se te enviara mas informacion sobre los accesorios y del modelo " + modelo.value + " a tu email: " + email.value)
}