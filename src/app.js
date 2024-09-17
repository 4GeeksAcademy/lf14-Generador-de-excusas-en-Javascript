/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = function() {
  //opciones de quien
  const quien = [
    "¡Mi aspiradora robot",
    "¡Una falla en la matrix",
    "¡Un ataque de amnesia colectiva",
    "¡Una invasión alienígena",
    "¡Un error en la simulación",
    "¡Un duende eléctricista"
  ];
  //opciones de que hizo
  const hizo = [
    "hizo desaparecer",
    "eliminó en forma permanente",
    "desactivó temporalmente",
    "reprogramó",
    "alteró",
    "desmaterializó"
  ];
  //opciones de lo afectado
  const objetoAfectado = [
    "la red!",
    "mi teléfono!",
    "mi código!",
    "mi computadora!",
    "mi memoria!",
    "el tejido del espacio-tiempo!"
  ];

  function seleccionarAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  function generarExcusa() {
    const randomQuien = seleccionarAleatorio(quien);
    const randomHizo = seleccionarAleatorio(hizo);
    const randomObjetoAfectado = seleccionarAleatorio(objetoAfectado);
    const excuse = `${randomQuien} ${randomHizo} ${randomObjetoAfectado}.`;
    document.getElementById("excuse").innerHTML = excuse;
    const generarButton = document.getElementById("generar");
    generarButton.addEventListener("click", generarExcusa);
  }

  generarExcusa();
};
