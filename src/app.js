/* eslint-disable */

window.onload = function() {
  //opciones de quien
  const excusa_quien = [
    "¡Mi aspiradora robot ",
    "¡Una falla en la matrix ",
    "¡Un ataque de amnesia colectiva ",
    "¡Una invasión alienígena ",
    "¡Un error en la simulación ",
    "¡Un duende eléctricista ",
  ];
  //opciones de que hizo
  const excusa_hizo = [
    "hizo desaparecer ",
    "eliminó en forma permanente ",
    "desactivó temporalmente ",
    "reprogramó ",
    "alteró ",
    "desmaterializó ",
  ];
  //opciones de lo afectado
  const excusa_objetoAfectado = [
    "la red!",
    "mi teléfono!",
    "mi código!",
    "mi computadora!",
    "mi memoria!",
    "el tejido del espacio-tiempo!",
  ];

  function generarAleatorio(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  //función que combina las const para generar la excusa
  function generarExcusa() {
    //math.random devuelve random y math.floor redondea

    const excusa =
      generarAleatorio(excusa_quien) +
      generarAleatorio(excusa_hizo) +
      generarAleatorio(excusa_objetoAfectado);

    document.getElementById("excusa").innerHTML = excusa;

    const generarButton = document.getElementById("generar");
    generarButton.addEventListener("click", generarExcusa);
  }

  generarExcusa();
};
