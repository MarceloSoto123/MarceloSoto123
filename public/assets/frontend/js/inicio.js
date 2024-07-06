// script.js

// Función para validar el formulario de inicio de sesión
function validarInicioSesion() {
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    // Aquí puedes implementar la lógica de validación
    // Por ejemplo, puedes verificar si el usuario y la contraseña son válidos

    if (usuario === "usuario" && contraseña === "contraseña") {
        alert("Inicio de sesión exitoso. ¡Bienvenido!");
        // Aquí podrías redirigir al usuario a otra página después de iniciar sesión
    } else {
        alert("Error: Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
}
