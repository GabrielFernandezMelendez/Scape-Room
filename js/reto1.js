function iniciarReto1() {
}

const btnEnterReto1 = document.getElementById("btnReto1");
const inputContrasena = document.getElementById("InputContrasena");
const msgReto1 = document.getElementById("mensajeReto1");
const btnSalida = document.getElementById("btnSalida");

const pantallaReto1 = document.getElementById("reto1");
const pantallaReto2 = document.getElementById("reto2");

const contrasenaCorrecta = "1987";



function esContrasenaCorrecta(valor) {
  return valor === contrasenaCorrecta;
}


function accesoDenegado() {
  msgReto1.textContent = "Access denied";
}



function comprobarContrasena() {
  const valor = inputContrasena.value.trim();

  if (esContrasenaCorrecta(valor)) {
    accesoConcedido();
  } else {
    accesoDenegado();
  }
}

function accesoConcedido() {
 
  pantallaReto1.classList.add("oculta");
  pantallaReto2.classList.remove("oculta");
}

btnEnterReto1.addEventListener("click", comprobarContrasena);
