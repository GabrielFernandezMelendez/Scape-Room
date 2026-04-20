// ── Selección de elementos ───────────────────────────────
const btnEnterReto1   = document.getElementById("btnReto1");
const inputContrasena = document.getElementById("InputContrasena");
const msgReto1        = document.getElementById("mensajeReto1");

const contrasenaCorrecta = "1987";

// ── Lógica de contraseña ─────────────────────────────────
function esContrasenaCorrecta(valor) {
  return valor === contrasenaCorrecta;
}

function accesoDenegado() {
  msgReto1.textContent = "Access denied. Try again.";
  msgReto1.className = "mensaje incorrecto";

  // Limpiamos el input para que el jugador vuelva a escribir
  inputContrasena.value = "";
}

function accesoConcedido() {
  msgReto1.textContent = "Access granted. Loading...";
  msgReto1.className = "mensaje correcto";

  // Pequeño retraso para que el jugador lea el mensaje antes de avanzar
  setTimeout(() => {
    mostrarPantalla(reto2);  // función global de script.js
    iniciarReto2();           // función global de reto2.js
  }, 800);
}

function comprobarContrasena() {
  const valor = inputContrasena.value.trim();

  if (esContrasenaCorrecta(valor)) {
    accesoConcedido();
  } else {
    accesoDenegado();
  }
}

// ── Permitir pulsar Enter además del botón ───────────────
// Es más natural en un formulario de login
inputContrasena.addEventListener("keypress", function(e) {
  if (e.key === "Enter") comprobarContrasena();
});

btnEnterReto1.addEventListener("click", comprobarContrasena);


// ── Papeles de las esquinas ──────────────────────────────

// querySelector aquí selecciona el primer elemento que coincide
// (lo usamos para verificar que existen antes de iterar)
const primerPapel = document.querySelector(".papel");

if (primerPapel) {

  // querySelectorAll devuelve todos los .papel — los 4 de las esquinas
  const papeles = document.querySelectorAll(".papel");

  papeles.forEach(function(papel) {
    papel.addEventListener("click", function(evento) {

      // Importante: paramos la propagación del click para que no se
      // cierre inmediatamente si el padre también tiene un listener
      evento.stopPropagation();

      // toggle: si tiene .abierto la quita, si no la tiene la añade
      // Es un interruptor — primer click abre, segundo cierra
      papel.classList.toggle("abierto");
    });
  });

  // Click en cualquier otro sitio de la página cierra todos los papeles
  // Esto mejora la UX: no tienes que hacer click de nuevo en el papel
  document.addEventListener("click", function() {
    papeles.forEach(function(p) {
      p.classList.remove("abierto");
    });
  });
}


// ── Función de inicio (por si se llama desde el flujo) ───
function iniciarReto1() {
  inputContrasena.value = "";
  msgReto1.textContent  = "";
  msgReto1.className    = "mensaje";
}