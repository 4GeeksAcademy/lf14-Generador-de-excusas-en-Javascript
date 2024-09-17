/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = function() {
  const quien = [
    "¡Mi aspiradora robot",
    "¡Una falla en la matrix",
    "¡Un ataque de amnesia colectiva",
    "¡Una invasión alienígena",
    "¡Un error en la simulación",
    "¡Un duende eléctricista"
  ];

  const hizo = [
    "hizo desaparecer",
    "eliminó en forma permanente",
    "desactivó temporalmente",
    "reprogramó",
    "alteró",
    "desmaterializó"
  ];

  const objetoAfectado = [
    "la red!",
    "mi teléfono!",
    "mi código!",
    "mi computadora!",
    "mi memoria!",
    "el tejido del espacio-tiempo!"
  ];

  function generarAleatorio(Array) {
    return Math.floor(Math.random() * Array.length);
  }

  function generarExcusa() {
    const excuse =
      quien[generarAleatorio(quien)] +
      " " +
      hizo[generarAleatorio(hizo)] +
      " " +
      objetoAfectado[generarAleatorio(objetoAfectado)];

    document.getElementById("excuse").innerHTML = excuse;
    const generarButton = document.getElementById("generar");
    generarButton.addEventListener("click", generarExcusa);
  }

  generarExcusa();
};
