// 1) Importar el objeto 'database' del archivo "./basededatos"
import { database } from './basededatos';


// 8) Importar helpers desde su propio módulo
import { helpers } from './helpers';


// 2) Implementar una función que obtenga una universidad por Id
// 🤓 Tip: pueden ir probando las funciones usando console.log() asegurándose que los resultados sean los esperados
console.log("EJERCICIO 2:");
console.log("Profesor con id=1: "+helpers.getProfesorById(1));
console.log("");

// 3) Implementar una función que obtenga un profesor por Id
console.log("EJERCICIO 3:");
console.log("Universidad con id=1: "+helpers.getUniversidadById(1));
console.log("");

// 4) Implementar una función que obtenga una materia por Id
// 🤓 Tip: Comparar con la función del ejercicio (3) y ver si se les ocurre una función genérica que sirva para cualquier tabla
console.log("EJERCICIO 4:");
console.log("Materia con id=1: "+helpers.getMateriaById(1));
console.log("");


// 7) Crear un nuevo método en helpers que devuelva el último ID utilizado en una tabla
console.log("EJERCICIO 7:");
console.log("Ultima Materia:" + helpers.getLastMateriaId());
console.log("Ultima Universidad:" + helpers.getLastUniversidadId());
console.log("Ultimo Profesor:" + helpers.getLastProfesorId());
console.log("Ultima Provincia:" + helpers.getLastProvinciaId());
console.log("");


// 9) Implementar una función que permite insertar una nueva provincia en la base de datos
//    La función tomará como parámetro el nombre de la provincia y devolverá el ID de la nueva provincia
// 🤓 Tip: Reusar una o más funciones de helper
console.log("EJERCICIO 9:");
console.log("Id de nueva provincia:" + helpers.addProvincia("Chubut"));
console.log(database.provincias[database.provincias.length-1]);
console.log("");


// 10) Implementar una función que reciba el id de una materia y devuelva la materia son los ids de universidad y profesores resueltos a sus nombres
console.log("EJERCICIO 10:");
console.log(helpers.getMateriaExtendById(1));
console.log(helpers.getMateriaExtendById(3));
console.log(helpers.getMateriaExtendById(5));
console.log("");


// 11) Implementar una función que muestre en consola la información para todos los alumnos de la siguiente manera:
// NOTAS DE ALUMNOS
// ----------------
// RIGOBERTO MANCHU        <-- En mayúsculas
// Análisis matemático: 5
// ....
// ALUMNO 2
// ...

console.log("EJERCICIO 11:");
const ListAlumnos = () =>{
    const printNota = (calificacion) => {
        console.log(helpers.getMateriaById(calificacion.materia).nombre+": "+calificacion.nota);
    }
    
    console.log("NOTAS DE ALUMNOS");
    console.log("----------------");

    for (const alumno of database.alumnos){
        console.log(alumno.nombre.toUpperCase());
        database.calificaciones.filter(value => value.alumno === alumno.id).forEach(value => printNota(value));
        console.log("");
    }
}

ListAlumnos();
console.log("");

// 12) Implementar una función que guarde la calificación de un alumno y una materia
//     La función recibirá: 'nombre del alumno', 'nombre de la materia', 'nota'
//     Si el alumno y/o la materia no existen deberán crearlos en sus respectivas tablas

console.log("EJERCICIO 12:");
console.log(helpers.addCalificiacion("Marcelo Moyano","Programación Java Script",10));
console.log(helpers.addCalificiacion("Marcelo Moyano","Ciencias Sociales",4));
console.log(helpers.addCalificiacion("Suzana Mendez","Programación orientada a objetos",8));
console.log("");




