const btnJugueton = document.getElementById("btn-jugueton");
const btnSi = document.getElementById("btn-si");
const contenedor = document.getElementById("area-juego");

let contador = 0;
let escalaSi = 1;

// Frases juguetonas que cambian al intentar tocar el botón
const frases = [
  "¿Segura? 🤨",
  "¡Casi me atrapas! 💨",
  "¡No se vale! 🐝",
  "¡Las flores no se niegan! 🌻",
  "¡Por aquí no es! 😜",
  "Mejor dale al Sí 💛",
  "¡Ríndete ya! 😂"
];

function esquivar(e) {
  if (e) e.preventDefault();

  contador++;

  // Cambiar el texto del botón
  btnJugueton.textContent = frases[contador % frases.length];

  // Calcular nueva posición dentro de los límites del contenedor
  const maxX = contenedor.clientWidth - btnJugueton.clientWidth;
  const maxY = contenedor.clientHeight - btnJugueton.clientHeight;

  const randomX = Math.max(0, Math.floor(Math.random() * maxX));
  const randomY = Math.max(0, Math.floor(Math.random() * maxY));

  btnJugueton.style.left = `${randomX}px`;
  btnJugueton.style.top = `${randomY}px`;

  // Crecer progresivamente el botón "Sí"
  escalaSi += 0.08;
  btnSi.style.transform = `scale(${escalaSi})`;
}

// Escuchadores de eventos para PC y celulares táctiles
btnJugueton.addEventListener("mouseover", esquivar);
btnJugueton.addEventListener("click", esquivar);
btnJugueton.addEventListener("touchstart", esquivar);