const { json } = require('body-parser');

const TODO = ['Queso', 'Tomates', 'Zanahorias', 'Toalla'];
let listaItems = [];

const addItem = (list, item) => {
  if (item && listaItems.indexOf(item) < 0) {
    listaItems.push(item);
    const li = document.createElement('li');
    li.innerHTML = item;
    li.id = item;
    list.appendChild(li);
    let botonDel = document.createElement('button');
    botonDel.innerHTML = 'x';
    botonDel.addEventListener('click', (e) => {
      const pos = listaItems.indexOf(e.target.parentElement.id);
      listaItems.splice(pos, 1);
      e.target.parentElement.remove();
      console.log(listaItems);
    });
    li.appendChild(botonDel);
  }
  console.log(listaItems);
};

const cargaInicial = () => {
  // creo la lista
  let lista = document.createElement('ul');

  //localStorage.clear(); //Esto sirve para inicializar el storage
  if (localStorage.TODO) {
    // si en el storage tengo algo, lo tomo de ahí
    JSON.parse(localStorage.TODO).forEach((e) => {
      addItem(lista, e);
    });
  }
  // sino tomo la lista TODO por defecto
  else
    TODO.forEach((e) => {
      addItem(lista, e);
    });
  //}
  let divList = document.createElement('div');
  divList.appendChild(lista);
  // creo los botones
  let inputAdd = document.createElement('input');
  let botonAdd = document.createElement('button');
  botonAdd.className = 'btn btn-success';
  botonAdd.type = 'button';
  botonAdd.innerHTML = 'Agregar';
  botonAdd.addEventListener('click', (e) => {
    addItem(lista, inputAdd.value);
  });
  let divAdd = document.createElement('div');
  divAdd.appendChild(inputAdd);
  divAdd.appendChild(botonAdd);
  // agrego todo al cuerpo de la página
  document.getElementById('app').appendChild(divList);
  document.getElementById('app').appendChild(divAdd);
  // agrego un evento que se ejecuta justo antes de recargar la página para guardar en el storage la lista actual
  window.onbeforeunload = function (event) {
    localStorage.TODO = JSON.stringify(listaItems);
  };
};

cargaInicial();
