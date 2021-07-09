// Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar');
const resetBtn = document.getElementById('resetBtn');


// Event Listeners
eventListeners();

function eventListeners() {
    // Inicio de la aplicacion y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);

    // Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    // Boton de enviar en el submit
    formularioEnviar.addEventListener('click', enviarEmail);

    // Boton de reset
    resetBtn.addEventListener('click', resetFormulario);
}


// Funciones
function inicioApp() {
    // Deshabilitar el envio
    btnEnviar.disabled = true;
}

// Valida que elcampo tenga algo escrito
function validarCampo() {
    // Se valida la longitud del text y que no este vacio
    validarLongitud(this);

    // Validar unicamente el email
    if (this.type === 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if (errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }
}

// Resetiar el formulario
function resetFormulario(e) {
    formularioEnviar.reset();
    e.preventDefault();
}

// Cuando se envia el correo
function enviarEmail(e) {
    // Spinner al precionar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    // GIf que envia email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    // Ocultar spinner y mostrar Gif de enviado
    setTimeout(function() {
        spinnerGif.style.display = 'none';

        document.querySelector('#loaders').appendChild(enviado);

        setTimeout(function() {
            enviado.remove();
            formularioEnviar.reset();
        }, 5000);

    }, 3000);

    e.preventDefault();

}

// Verifica la longitud del texto ene los campos 
function validarLongitud(campo) {
    if (campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo) {
    const mensaje = campo.value;
    if (mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}