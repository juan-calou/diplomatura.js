const MOUNTAINS = [
  { name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
  { name: 'Everest', height: 8848, place: 'Nepal' },
  { name: 'Mount Fuji', height: 3776, place: 'Japan' },
  { name: 'Vaalserberg', height: 323, place: 'Netherlands' },
  { name: 'Denali', height: 6168, place: 'United States' },
  { name: 'Popocatepetl', height: 5465, place: 'Mexico' },
  { name: 'Mont Blanc', height: 4808, place: 'Italy/France' },
];

const COLUMNS = [
  {
    column1: 'Name',
    column2: 'Height',
    column3: 'Place',
  },
  {
    column1: 'Nombre',
    column2: 'Peso',
    column3: 'Lugar',
  },
];

const tabla = document.querySelector('#tabla');
const english = document.querySelector('#english');
const spanish = document.querySelector('#spanish');

english.onclick = function () {
  generate(0);
};

spanish.onclick = function () {
  generate(1);
};

function generate(lang) {
  let tablaHTML = `<table>
        <tr>
        <th>${COLUMNS[lang].column1}</th>
        <th>${COLUMNS[lang].column2}</th>
        <th>${COLUMNS[lang].column3}</th>
    </tr>`;

  MOUNTAINS.map((el) => {
    tablaHTML =
      tablaHTML +
      `<tr>
            <td>${el.name}</td>
            <td>${el.height}</td>
            <td>${el.place}</td>
        </tr>`;
    return 0;
  });

  tablaHTML = tablaHTML + `</table>`;
  tabla.innerHTML = tablaHTML;
}

generate(0);
