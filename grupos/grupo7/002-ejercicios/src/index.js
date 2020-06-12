// 1) Importar el objeto 'database' del archivo "./basededatos"
import { database } from './baseDeDatos';
import { helpers } from './helpers';

// 7) Crear un nuevo método en helpers que devuelva el último ID utilizado en una tabla
const lastID = (el) => Object.keys(el).pop().id,
helpers.push(lastID);

// 8) Importar helpers desde su propio módulo

// 9) Implementar una función que permite insertar una nueva provincia en la base de datos
//    La función tomará como parámetro el nombre de la provincia y devolverá el ID de la nueva provincia
// 🤓 Tip: Reusar una o más funciones de helper
const insertarProvincia = (nombreProvincia) => {
    let id = helpers.lastID(el) + 1;
    database.provincias = [...database.provincias, { id: id, nombre: nombreProvincia }];
    return id;
}

// 10) Implementar una función que reciba el id de una materia y devuelva la materia son los ids de universidad y profesores resueltos a sus nombres

// 11) Implementar una función que muestre en consola la información para todos los alumnos de la siguiente manera:
// NOTAS DE ALUMNOS
// ----------------
// RIGOBERTO MANCHU        <-- En mayúsculas
// Análisis matemático: 5
// ....
// ALUMNO 2
// ...

// 12) Implementar una función que guarde la calificación de un alumno y una materia
//     La función recibirá: 'nombre del alumno', 'nombre de la materia', 'nota'
//     Si el alumno y/o la materia no existen deberán crearlos en sus respectivas tablas
