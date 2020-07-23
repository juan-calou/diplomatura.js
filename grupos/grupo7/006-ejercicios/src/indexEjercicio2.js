const MOUNTAINS = [
    { name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
    { name: 'Everest', height: 8848, place: 'Nepal' },
    { name: 'Mount Fuji', height: 3776, place: 'Japan' },
    { name: 'Vaalserberg', height: 323, place: 'Netherlands' },
    { name: 'Denali', height: 6168, place: 'United States' },
    { name: 'Popocatepetl', height: 5465, place: 'Mexico' },
    { name: 'Mont Blanc', height: 4808, place: 'Italy/France' },
  ];

const createCell = (contenido, tipo) => {
    let celda = document.createElement(tipo);
    const texto = document.createTextNode(contenido);
    celda.appendChild(texto);
    return celda;
};

const createRow = (data = [],tipo = "td") => {
    let fila = document.createElement("tr");
    data.forEach(element => {
        fila.appendChild(createCell(element,tipo));
    });
    return fila;
};

const generarTabla = (idioma) => {
    console.log("generarTabla en " + idioma);
}

let nuevTabla = document.createElement("table");
nuevTabla.appendChild(createRow(["name","height","place"],"th"));
MOUNTAINS.forEach(element => {
    nuevTabla.appendChild(createRow([element.name,element.height,element.place]));
});
document.getElementById('app').appendChild(nuevTabla);



