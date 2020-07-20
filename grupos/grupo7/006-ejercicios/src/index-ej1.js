const MOUNTAINS = [
  { name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
  { name: 'Everest', height: 8848, place: 'Nepal' },
  { name: 'Mount Fuji', height: 3776, place: 'Japan' },
  { name: 'Vaalserberg', height: 323, place: 'Netherlands' },
  { name: 'Denali', height: 6168, place: 'United States' },
  { name: 'Popocatepetl', height: 5465, place: 'Mexico' },
  { name: 'Mont Blanc', height: 4808, place: 'Italy/France' },
];

const tabla = document.querySelector('#tabla');

let tablaHTML = `<table>
    <tr>
    <th>name</th>
    <th>height</th>
    <th>place</th>
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
