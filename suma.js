var suma = document.querySelector('.suma');
var cantidad1; 

document.addEventListener('DOMContentLoaded', function() {
    suma.addEventListener('click', function() {
        // Almacenar el primer número
        cantidad1 = parseFloat(display.textContent);

        // Borrar el contenido del display
        display.textContent = '0';
    });
});