// 6) Mover helpers y el todo el co´digo a un módulo, creando un nuevo archivo helpers.js
import { database } from './baseDeDatos';
const getById = (tabla) => (id) => database[tabla].find((i) => i.id === id);
const getByNombre = (tabla) => (nombre) => database[tabla].find((i) => i.nombre === nombre);

// 2) Implementar una función que obtenga una universidad por Id
// 🤓 Tip: pueden ir probando las funciones usando console.log() asegurándose que los resultados sean los esperados
const getUniversidadById = getById('universidades');

// 3) Implementar una función que obtenga un profesor por Id
const getProfesorById = getById('profesores');

// 4) Implementar una función que obtenga una materia por Id
// 🤓 Tip: Comparar con la función del ejercicio (3) y ver si se les ocurre una función genérica que sirva para cualquier tabla
const getMateriaById = getById('materias');

const getAlumnoByNombre = getByNombre('alumnos');
const getMateriaByNombre = getByNombre('materias');

// 7) Crear un nuevo método en helpers que devuelva el último ID utilizado en una tabla
const lastID = (table) => {
    let max = 0;
    table.map(e => {
        if (e.id > max) max = e.id;
    });
    return max;
}

// 5) Crear un objeto 'helpers' que contenga las funciones como métodos
export const helpers = {
    getUniversidadById,
    getProfesorById,
    getMateriaById,
    getAlumnoByNombre,
    getMateriaByNombre,
    lastID
};
