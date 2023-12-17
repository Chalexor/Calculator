var suma = document.querySelector('.suma');
var cantidad1 = 0; 
var cantidad2 = 0;

document.addEventListener('DOMContentLoaded', function() {
    suma.addEventListener('click', function() {
        if(cantidad1 > 0){
            cantidad2 = parseFloat(display.textContent);

             // Realizar la suma
            var resultadoSuma = cantidad1 + cantidad2;

             // Borrar el contenido del display
            display.textContent = '0';

            // Mostrar el resultado en el display
            display.textContent = resultadoSuma;
            
        } else {
            // Almacenar el primer número
            cantidad1 = parseFloat(display.textContent);

            // Borrar el contenido del display
            display.textContent = '0';
        }
        
    });
});