// operaciones.js

// Variables para almacenar los valores y la operación actual
let valorAnterior = '';
let valorActual = '';
let operacionActual = '';

// Función para realizar la operación
function calcular() {
    let resultado;
    const num1 = parseFloat(valorAnterior);
    const num2 = parseFloat(valorActual);

    if (isNaN(num1) || isNaN(num2)) {
        return; // Manejar errores si los números no son válidos
    }

    switch (operacionActual) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case 'x':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                alert("Error: División por cero.");
                limpiarOperaciones();
                return;
            }
            break;
        default:
            return;
    }

    valorAnterior = resultado.toString();
    valorActual = '';
    operacionActual = '';
}

// Función para limpiar las variables de operaciones
function limpiarOperaciones() {
    valorAnterior = '';
    valorActual = '';
    operacionActual = '';
}

// Función para quitar un carácter del display
function accionQuitar() {
    // Lógica para quitar un carácter del display
}

// Función para limpiar el display o realizar alguna acción específica
function actualizarEliminar() {
    // Lógica para limpiar el display o realizar alguna acción específica
}
