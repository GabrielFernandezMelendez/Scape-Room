// RETO 4 — LIMPIEZA DE CONSOLA

// Usamos una IIFE (Immediately Invoked Function Expression) para encapsular el código
// y evitar contaminar el ámbito global. Esperamos a que el DOM esté listo.
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    
    // --- REFERENCIAS A ELEMENTOS DEL DOM ---
    const contenedorLogs = document.getElementById("contenedor-logs");  
    const mensajeReto4 = document.getElementById("mensajeReto4");     
    const pantallaReto4 = document.getElementById("reto4");             
    const pantallaExito = document.getElementById("pantalla-exito");  
    const pantallaError = document.getElementById("pantalla-error");   

    // Botones de las pantallas de resultado
    const btnExitoContinuar = document.getElementById("btn-exito-continuar");
    const btnExitoReiniciar = document.getElementById("btn-exito-reiniciar");
    const btnErrorReintentar = document.getElementById("btn-error-reintentar");
    const btnReiniciarReto4 = document.getElementById("btn-reiniciar-reto4"); // Botón dentro del reto 4

    // --- ESTADO DEL RETO ---
    let reto4Completado = false;   // Para evitar doble clic en el error
    let logsGenerados = [];        // Almacena los logs actuales (por si se necesitan)

    // --- FUNCIÓN: GENERAR ARRAY DE LOGS MEZCLADOS ---
    // Crea 19 logs normales y 1 error crítico, luego los desordena aleatoriamente con .math
    function generarLogs() {
      const logs = [];
      for (let i = 0; i < 19; i++) {
        logs.push({ texto: 'console.log("loaded")', tipo: 'normal' });
      }
      logs.push({ texto: 'console.error("CRITICAL BUG")', tipo: 'error' });
      return logs.sort(() => Math.random() - 0.5);
    }

    // --- FUNCIÓN: PINTAR LOS LOGS EN PANTALLA ---
    // Vacía el contenedor, crea un div por cada log y asigna los event listeners.
    function renderizarLogs(logs) {
      contenedorLogs.innerHTML = '';        // Limpiar consola visual
      logsGenerados = logs;                 // Guardar estado

      logs.forEach((logData) => {
        const logElement = document.createElement('div');
        logElement.classList.add('log');    // Clase base
        if (logData.tipo === 'error') {
          logElement.classList.add('error'); // Clase especial para el error crítico
        }
        logElement.textContent = logData.texto;
        contenedorLogs.appendChild(logElement);
      });

      // Seleccionamos TODOS los elementos con clase 'log' y les añadimos un listener.
      const todosLosLogs = document.querySelectorAll('.log');
      todosLosLogs.forEach(log => {
        log.addEventListener('click', manejarClickLog);
      });
    }

    // Determina si el log clickeado es el error crítico y actúa en consecuencia.
    function manejarClickLog(evento) {
      if (reto4Completado) return; // Si ya se encontró el error, ignorar clics

      const logClickeado = evento.currentTarget;
      const esError = logClickeado.classList.contains('error');

      if (esError) {
        // ACIERTO: se encontró el CRITICAL BUG
        reto4Completado = true;
        ocultarPantallaReto4YMostrar(pantallaExito);
      } else {
        // FALLO: se hizo clic en un log normal
        ocultarPantallaReto4YMostrar(pantallaError);
      }
    }

    // funsion para cambiar entre las 2 pantallas
    function ocultarPantallaReto4YMostrar(pantallaDestino) {
      pantallaReto4.classList.add("oculta");
      pantallaDestino.classList.remove("oculta");
    }

    // vuelve a generar los logs para refescar la lista y por lo tanto la posicion del log de error
    function reiniciarReto4() {
      reto4Completado = false;
      pantallaExito.classList.add("oculta");
      pantallaError.classList.add("oculta");
      pantallaReto4.classList.remove("oculta");
      
      const nuevosLogs = generarLogs();
      renderizarLogs(nuevosLogs);
      mensajeReto4.textContent = '';
      mensajeReto4.className = 'mensaje';
    }

    // Se ejecuta al pulsar continue y nos lleva a  la pantalla de éxito.
    function continuarAlFinal() {
      pantallaExito.classList.add("oculta");
      // Llamamos a la función global reiniciarJuego (definida en script.js)
      if (typeof reiniciarJuego === 'function') {
        reiniciarJuego();
      } else {
        // Fallback por si el script principal aún no está listo
        document.getElementById("pantalla-inicio").classList.remove("oculta");
      }
    }

    // Prepara la pantalla y muestra los logs por primera vez.
    function iniciarReto4() {
      reto4Completado = false;
      pantallaReto4.classList.remove("oculta");
      pantallaExito.classList.add("oculta");
      pantallaError.classList.add("oculta");
      
      const logs = generarLogs();
      renderizarLogs(logs);
      mensajeReto4.textContent = '';
      mensajeReto4.className = 'mensaje';
    }

    
    // Asociamos cada botón con su función correspondiente.
    if (btnExitoContinuar) {
      btnExitoContinuar.addEventListener("click", continuarAlFinal);
    }
    if (btnExitoReiniciar) {
      //"RESTART CHALLENGE" (éxito) – actualmente reinicia el reto 4
      btnExitoReiniciar.addEventListener("click", function() {
 mostrarPantalla(pantallaInicio);
});
    }
    if (btnErrorReintentar) {
      btnErrorReintentar.addEventListener("click", mostrarPantalla(pantallaInicio));
    }
    if (btnReiniciarReto4) {
      btnReiniciarReto4.addEventListener("click", reiniciarReto4);
    }

    // --- EXPONER LA FUNCIÓN DE INICIO GLOBALMENTE ---
    // Necesario para que script.js pueda llamar a iniciarReto4() cuando se muestre el reto. , podria poner window. para que no se le tenga que  dar al  boton la primera vez 
    iniciarReto4 = iniciarReto4;
  });
})();