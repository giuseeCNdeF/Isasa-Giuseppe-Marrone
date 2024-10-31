// Selecciona el botón por su ID
const botonCambiarColor = document.getElementById("botonCambiarColor");

// Función para cambiar el color de fondo
botonCambiarColor.addEventListener("click", function() {
    document.body.style.backgroundColor = generarColorAleatorio();
});

// Genera un color aleatorio en formato hexadecimal
function generarColorAleatorio() {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}
