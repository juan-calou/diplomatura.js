// 6) Mover helpers y el todo el co´digo a un módulo, creando un nuevo archivo helpers.js
import { database } from './baseDeDatos';

// 2) Implementar una función que obtenga una universidad por Id
// 🤓 Tip: pueden ir probando las funciones usando console.log() asegurándose que los resultados sean los esperados
const getById = (tabla) => (id) => database[tabla].find((i) => i.id === id);
const getUniversidadById = getById('universidades');

// 3) Implementar una función que obtenga un profesor por Id
const getProfesorById = getById('profesores');

// 4) Implementar una función que obtenga una materia por Id
// 🤓 Tip: Comparar con la función del ejercicio (3) y ver si se les ocurre una función genérica que sirva para cualquier tabla
const getMateriasById = getById('materias');

// 5) Crear un objeto 'helpers' que contenga las funciones como métodos
const helpers = {
    getUniversidadById,
    getProfesorById,
    getMateriasById
};

export default helpers;