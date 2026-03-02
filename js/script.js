let numeroAleatorio = Math.floor(Math.random() * 1000);

const numeroIngresado = document.getElementById("numero");
const boton = document.getElementById("boton");
const video = document.getElementById("estado");
const header = document.getElementById("encabezado");
const footer = document.getElementById("pie");
const temporizador = document.getElementById("temporizador");
const audio = document.getElementById("miSonido");
const botonSonido = document.getElementById("botonSonido");
const icono = botonSonido.querySelector("i");

let tiempo = 60;
let intervalo = null;
let juegoIniciado = false; 
let sonidoActivo = false;

boton.addEventListener("click", function() {

    const valor = Number(numeroIngresado.value);

    if (!juegoIniciado) {
        juegoIniciado = true;

        intervalo = setInterval(function() {
            tiempo--;
            temporizador.textContent = tiempo;

            if (tiempo <= 0) {
                clearInterval(intervalo);
                mensaje.textContent = "Se acabó el tiempo, el número era " + numeroAleatorio;
                boton.disabled = true;
            }

        }, 1000);
    }


    if (valor > numeroAleatorio) {
        mensaje.textContent = "El número es Menor";
        video.src = "img/triste.mp4";
        document.body.style.background = "#d6efff";
        header.style.background = "#2874a4";
        footer.style.background = "#2874a4";

    } else {
        mensaje.textContent = "El número es Mayor";
        video.src = "img/triste2.mp4";
        document.body.style.background = "#fff2d6";
        header.style.background = "#a43b28";
        footer.style.background = "#a43b28";
    }

    if (valor == numeroAleatorio) {
        clearInterval(intervalo); 
        juegoTerminado = true;
        video.src = "img/normal.mp4";
        mensaje.textContent = "¡Número Correcto!";
        document.body.style.background = "rgb(255, 239, 249)";
        header.style.background = "rgb(207, 23, 137)";
        footer.style.background = "rgb(207, 23, 137)";
    } 
});

botonSonido.addEventListener("click", function() {

    if (audio.paused) {
        audio.play();
        icono.classList.remove("fa-volume-xmark");
        icono.classList.add("fa-volume-high");
    } else {
        audio.pause();
        icono.classList.remove("fa-volume-high");
        icono.classList.add("fa-volume-xmark");
    }
});

