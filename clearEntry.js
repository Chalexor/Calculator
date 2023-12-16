var ce = document.querySelector('.quitar');

ce.addEventListener('click', function() {
     // Obtener el contenido actual del display
     var contenidoDisplay = display.textContent;

     // Verificar si el contenido del display tiene más de un carácter
     if (contenidoDisplay.length > 1) {
         // Eliminar el último carácter del contenido del display
         display.textContent = contenidoDisplay.slice(0, -1);
     } else {
         // Si solo hay un carácter, restablecer el display a '0'
         display.textContent = '0';
     }
 });