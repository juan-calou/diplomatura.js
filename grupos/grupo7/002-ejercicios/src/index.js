// 1) Importar el objeto 'database' del archivo "./basededatos"
//import { database } from './basededatos';
import { helpers as ModHelpers} from './helpers';

// 2) Implementar una función que obtenga una universidad por Id
// 🤓 Tip: pueden ir probando las funciones usando console.log() asegurándose que los resultados sean los esperados
console.log('La universidad con id = 1: ', ModHelpers.getUniversidadById(1));
//console.log(ModHelpers.getUniversidadById(100)? 'Existe':'No Existe');

// 3) Implementar una función que obtenga un profesor por Id
console.log('El profesor con id = 1: ',ModHelpers.getProfesorById(1));

// 4) Implementar una función que obtenga una materia por Id
// 🤓 Tip: Comparar con la función del ejercicio (3) y ver si se les ocurre una función genérica que sirva para cualquier tabla
console.log('La materia con id = 1: ',ModHelpers.getMateriaById(1));

// 5) Crear un objeto 'helpers' que contenga las funciones como métodos

// 6) Mover helpers y el todo el co´digo a un módulo, creando un nuevo archivo helpers.js

// 7) Crear un nuevo método en helpers que devuelva el último ID utilizado en una tabla
console.log('Max id utilizado en la tabla provincias: ', ModHelpers.getMaxId('provincias'));

// 8) Importar helpers desde su propio módulo
// import { helpers as ModHelpers} from './helpers'; // lo llevo para arriba

// 9) Implementar una función que permite insertar una nueva provincia en la base de datos
//    La función tomará como parámetro el nombre de la provincia y devolverá el ID de la nueva provincia
// 🤓 Tip: Reusar una o más funciones de helper
console.log('Se incorpora la provincia de Chubut con el id: ',ModHelpers.getIdProvincia('Chubut'));
console.log('Se incorpora la provincia de Neuquen con el id: ',ModHelpers.getIdProvincia('Neuquen'));

// 10) Implementar una función que reciba el id de una materia y devuelva la materia son los ids de universidad y profesores resueltos a sus nombres
console.log('La materia con id = 4: ', ModHelpers.getMateriaCompletoById(4));

// 11) Implementar una función que muestre en consola la información para todos los alumnos de la siguiente manera:
// NOTAS DE ALUMNOS
// ----------------
// RIGOBERTO MANCHU        <-- En mayúsculas
// Análisis matemático: 5
// ....
// ALUMNO 2
// ...
ModHelpers.imprimirNotasAlumnos();

// 12) Implementar una función que guarde la calificación de un alumno y una materia
//     La función recibirá: 'nombre del alumno', 'nombre de la materia', 'nota'
//     Si el alumno y/o la materia no existen deberán crearlos en sus respectivas tablas
    ModHelpers.pushCalificacion('Alina Robles','Diseño de indumentaria',8);
    ModHelpers.imprimirNotasAlumnos();
    ModHelpers.pushCalificacion('Martita Robles','Diseño de indumentarias',8);
    ModHelpers.imprimirNotasAlumnos();