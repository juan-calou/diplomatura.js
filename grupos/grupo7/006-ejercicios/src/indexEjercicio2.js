const MOUNTAINS = [
  { name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
  { name: 'Everest', height: 8848, place: 'Nepal' },
  { name: 'Mount Fuji', height: 3776, place: 'Japan' },
  { name: 'Vaalserberg', height: 323, place: 'Netherlands' },
  { name: 'Denali', height: 6168, place: 'United States' },
  { name: 'Popocatepetl', height: 5465, place: 'Mexico' },
  { name: 'Mont Blanc', height: 4808, place: 'Italy/France' },
];

const TRASLATE = [
  { castellano: 'Nombre', ingles: 'Name' },
  { castellano: 'Altura', ingles: 'Height' },
  { castellano: 'Lugar', ingles: 'Place' },
];

const createCell = (contenido, tipo) => {
  let celda = document.createElement(tipo);
  const texto = document.createTextNode(contenido);
  celda.appendChild(texto);
  return celda;
};

const createRow = (data = [], tipo = 'td') => {
  let fila = document.createElement('tr');
  data.forEach((element) => {
    fila.appendChild(createCell(element, tipo));
  });
  return fila;
};

const generarTabla = (idioma) => {
  let cont = document.getElementById('divContTabla');
  if (cont) cont.innerHTML = '';
  let nuevTabla = document.createElement('table');

  // Genero los encabezados
  nuevTabla.appendChild(
    createRow(
      TRASLATE.map((element) => element[idioma]),
      'th'
    )
  );

  // Genero el resto de las tablas
  MOUNTAINS.forEach((element) => {
    nuevTabla.appendChild(
      createRow([element.name, element.height, element.place])
    );
  });

  document.getElementById('divContTabla').appendChild(nuevTabla);
};

// Agrego los botones y la tabla
let botonIngles = document.createElement('button');
botonIngles.innerHTML = 'Generate now!';
botonIngles.addEventListener('click', (e) => {
  generarTabla('ingles');
});

let botonCastellano = document.createElement('button');
botonCastellano.innerHTML = '¡Generar ahora!';
botonCastellano.addEventListener('click', (e) => {
  generarTabla('castellano');
});

let divContTabla = document.createElement('div');
divContTabla.id = 'divContTabla';
let divContBotones = document.createElement('div');
divContBotones.appendChild(botonIngles);
divContBotones.appendChild(botonCastellano);
document.getElementById('app').appendChild(divContBotones);
document.getElementById('app').appendChild(divContTabla);
