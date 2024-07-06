// script.js

// Función para enviar un mensaje al equipo de soporte técnico
function enviarMensaje() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;

    // Aquí puedes implementar la lógica para enviar el mensaje al equipo de soporte técnico
    // Por ahora, simplemente muestra una alerta con los datos del mensaje
    alert("Mensaje enviado:\nNombre: " + nombre + "\nCorreo: " + correo + "\nMensaje: " + mensaje);
}
