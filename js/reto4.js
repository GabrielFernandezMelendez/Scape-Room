o4 · JS
Copy

// =========================
// RETO 4 — LIMPIEZA DE CONSOLA
// Responsable: Gabriel
// =========================
 
 
// ── Selección de elementos DOM propios de este reto ──────
const btnTestReto4   = document.getElementById("btn-test-reto4");
const mensajeReto4   = document.getElementById("mensajeReto4");
const contenedorLogs = document.getElementById("contenedor-logs");
 
 
// ── Función de inicio del reto (se llamará desde el flujo) ──
function iniciarReto4() {
  // Aquí irá la lógica real: generar los 20 logs, añadir eventos, etc.
  // Por ahora solo limpiamos el mensaje por si se reinicia
  mensajeReto4.textContent = "";
  mensajeReto4.className = "mensaje";
}
 
 
// ── TEST DE CONEXIÓN — borrar cuando todo esté integrado ──
btnTestReto4.addEventListener("click", function () {
  mensajeReto4.textContent = "¡funciona!";
  mensajeReto4.className = "mensaje correcto";
});