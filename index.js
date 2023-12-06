document.addEventListener('DOMContentLoaded', function() {
    const numero = document.getElementsByName("numero");
    const operador = document.getElementsByName('operador');
    const quitar = document.getElementsByName('quitar')[0];
    const eliminar = document.getElementsByClassName('eliminar')[0];
    var igual = document.getElementsByName('igual')[0];
    var display = document.querySelector('.display');

    var opeActual = '';
    var opeAnterior = '';
    var operacion = undefined;

    numero.forEach(function(btn) {
        btn.addEventListener('click', function() {
            agregarAlDisplay(btn.innerText);
        });
    });

    operador.forEach((btn) => {
        btn.addEventListener('click', () => {
            agregarOperadorAlDisplay(btn.innerText);
        });
    });

    igual.addEventListener('click', () => {
        calcular();
        actualizarDisplay();
    });

    quitar.addEventListener('click', () => {
        accionQuitar();
        actualizarDisplay();
    });

    eliminar.addEventListener('click', () => {
        actualizarEliminar();
        actualizarDisplay();
    });

    function agregarAlDisplay(valor) {
        opeActual += valor;
        actualizarDisplay();
    }

    function agregarOperadorAlDisplay(operador) {
        opeActual += ' ' + operador + ' ';
        actualizarDisplay();
    }

    function actualizarDisplay() {
        display.innerText = opeActual;
    }

    // ... (código existente)

    function agregarOperadorAlDisplay(operador) {
        opeActual += ' ' + operador + ' ';
        actualizarDisplay();
        // También puedes almacenar la operación actual para su posterior cálculo
        operacionActual = operador;
        valorAnterior = opeActual; // Guardar el valor anterior antes de la operación
        valorActual = ''; // Limpiar el valor actual
    }
});
