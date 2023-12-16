var numeros = document.querySelectorAll('.botones.numero');
var display = document.querySelector('.display');

numeros.forEach(function(botonNumero) {
    botonNumero.addEventListener('click', function() {
        // Obtener el número asociado al botón
        var numeroPresionado = botonNumero.getAttribute('data-numero');

        // Obtener el contenido actual del display
        var contenidoDisplay = display.textContent;

        // Verificar si el contenido del display es "0" y reemplazarlo si es necesario
        if (contenidoDisplay === '0') {
            display.textContent = numeroPresionado;
        } else {
            // Concatenar el número al contenido actual del display
            display.textContent += numeroPresionado;
        }
    });
});