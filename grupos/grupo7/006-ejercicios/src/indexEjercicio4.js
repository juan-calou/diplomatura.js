const colores = ['globoRojo', 'globoAzul', 'globoAmarillo'];
totalGlobos = Math.floor(Math.random() * 21 + 10);

const dibujar = () => {
  let globo = document.createElement('div');
  let dimension = Math.random() * 50 + 30;
  console.log('clientHeight: ' + document.body.clientHeight);
  console.log('clientWidth: ' + document.body.clientWidth);
  let top = Math.random() * (600 - dimension - 40) + 10; //(document.body.clientHeight - dimension - 40) + 10;
  let left = Math.random() * (1000 - dimension - 40) + 10; //(document.body.clientWidth - dimension - 40) + 10;
  globo.style.height = dimension.toString() + 'px';
  globo.style.width = dimension.toString() + 'px';
  globo.style.borderRadius = dimension.toString() + 'px';
  globo.style.top = top.toString() + 'px';
  globo.style.left = left.toString() + 'px';
  globo.className = colores[Math.floor(3 * Math.random())]; //'globoRojo';
  globo.addEventListener('click', (e) => {
    e.target.style.display = 'none';
    totalGlobos = totalGlobos - 1;
    if (totalGlobos === 0) {
      const alert = document.createElement('div');
      alert.className = 'alert alert-success';
      alert.innerHTML = '¡Ganaste!';
      document.getElementById('app').appendChild(alert);
      console.log('ganaste!');
    }
    console.log('total globos: ' + totalGlobos);
  });
  document.getElementById('app').appendChild(globo);
};

for (let index = 0; index < totalGlobos; index++) {
  dibujar();
}
