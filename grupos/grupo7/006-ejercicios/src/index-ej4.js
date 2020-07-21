// ## Ejercicio 4: Jugando con globos

// El ejercicio consiste en implementar un juego con globos que muestre globos de
//    diferentes colores y permita al usuario explotarlos. Cuando no quede ningún
//    globo en pantalla mostrar un mensaje de finalización.

// - Dibujar un número aleario de globos entre 10 y 30. Tip utilizar `Math.random`
// - Implementar cada globo con un elemento `DIV`. Investigar las propiedad css
//   `border-radius` para generar el efecto apropiado
// - Dibujar globos rojos, azules y amarillos intercaladamente
// - Cada vez que el usuario hace clic sobre un globo, el mismo debe desaparecer
//   de la pantalla.
// - Cuando ya no queden globos mostrar el mensaje `¡Ganaste!`

let cantidadGlobos = 10;
const app = document.getElementById('app');

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function init() {
  limpiarPantalla();
  cantidadGlobos = randomInteger(10, 30);
  generarGlobos(cantidadGlobos);
}

function limpiarPantalla() {
  app.innerHTML = '';
}

function generarGlobos(q) {
  let assignColor = 0;
  for (let i = 1; i <= q; i++) {
    let bln = document.createElement('DIV');
    bln.className = 'baloon color' + assignColor;
    app.appendChild(bln);
    assignColor++;
    if (assignColor > 2) assignColor = 0;
  }

  let anchors = document.getElementsByClassName('baloon');
  for (let j = 0; j < anchors.length; j++) {
    let elem = anchors[j];
    elem.onclick = function () {
      this.remove();
      cantidadGlobos--;
      checkVacio();
      return false;
    };
  }
  return 1;
}

function checkVacio() {
  if (cantidadGlobos <= 0) {
    alert('Clickeaste en el ultimo globo. No quedan mas globos');
  }
}

init();
