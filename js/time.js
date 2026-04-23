

let timeLeft = 10;
let timerId = null;
const display = document.getElementById('timer-display');


function startTimer() {
    if (timerId !== null) return;



    timerId = setInterval(function () {
        timeLeft--;

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        let displayMinutes = String(minutes).padStart(2, '0');
        let displaySeconds = String(seconds).padStart(2, '0');
        const display = document.getElementById('timer-display');
        display.textContent = displayMinutes + ":" + displaySeconds;

        if (timeLeft <= 0) {

            clearInterval(timerId); // Останавливаем
            timerId = null;

            display.textContent = "00:00";
            alert("¡Has perdido! El tiempo ha terminado");

            mostrarPantalla(pantallaError);

            return;
        }

    }, 1000);
}
