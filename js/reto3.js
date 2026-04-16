
function iniciarReto3() {
}


// el objeto
const serverStatus = { 
cpuLoad: "99%",
temperature: Math.floor(Math.random() * 100 +99), 
};

document.getElementById('temp-value').textContent = serverStatus.temperature;
document.getElementById('cpuLoad').textContent = serverStatus.cpuLoad;



// Respuesta
const inputRespuesta = document.getElementById('respuestaReto3');

inputRespuesta.addEventListener('keypress', function (e) {
    //  Enter
    if (e.key === 'Enter') {
        const userValue = parseInt(inputRespuesta.value);

        if (userValue === serverStatus.temperature) {
            mensajeReto3.textContent = "¡Genial! Enfriamiento activado. Reiniciando...";
            setTimeout(() => { // Pequeño retraso para que se vea el botón rojo
                    mostrarPantalla(reto4);
                }, 600); 
        } else {
            alert("Error: ¡La temperatura sigue subiendo! Inténtalo de nuevo.");
            inputRespuesta.value = "";
        }
    }
});