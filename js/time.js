const btnReintentar = document.getElementById("btn-error-reintentar");
const btnExitoContinuar = document.getElementById("btn-exito-continuar");

let timeLeft = 300;
let timerId = null;
const display = document.getElementById('timer-display');


function stopTimer() {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
}

function startTimer() {
    if (timerId !== null) return;

    timerId = setInterval(function () {
        timeLeft--;

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        let displayMinutes = String(minutes).padStart(2, '0');
        let displaySeconds = String(seconds).padStart(2, '0');
        display.textContent = displayMinutes + ":" + displaySeconds;

        if (timeLeft <= 0) {
            stopTimer();
            display.textContent = "00:00";
            alert("¡Has perdido! El tiempo ha terminado");
            mostrarPantalla(pantallaError);
            return;
        }

    }, 1000);
}


if (btnReintentar) {
    btnReintentar.addEventListener("click", () => {
        stopTimer();                    
        /* timeLeft = 300;                 
        display.textContent = "05:00";   */
        startTimer();                   
    });
}


if (btnExitoContinuar) {
    btnExitoContinuar.addEventListener("click", () => {
        stopTimer(); 
        timeLeft = 300;                 
        display.textContent = "05:00";  
        startTimer();
    });
}