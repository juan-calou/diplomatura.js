// 1) Importar el objeto 'database' del archivo "./basededatos"
import { database } from './baseDeDatos';

// 8) Importar helpers desde su propio módulo
import { helpers } from './helpers';

// 9) Implementar una función que permite insertar una nueva provincia en la base de datos
//    La función tomará como parámetro el nombre de la provincia y devolverá el ID de la nueva provincia
// 🤓 Tip: Reusar una o más funciones de helper
export const insertarProvincia = (nombreProvincia) => {
    const newID = helpers.lastID(database.provincias) + 1;
    database.provincias = [...database.provincias, { id: newID, nombre: nombreProvincia }];
    return newID;
}
// console.log(insertarProvincia('nueva'));
// console.log(database.provincias);

// 10) Implementar una función que reciba el id de una materia y devuelva la materia
//     con los ids de universidad y profesores resueltos a sus nombres
export const datosMateria = (idMateria) => {
    const mat = helpers.getMateriaById(idMateria);
    const materia = {
        id: mat.id,
        nombre: mat.nombre,
        profesores: mat.profesores.map((e) => helpers.getProfesorById(e).nombre),
        universidad: helpers.getUniversidadById(mat.universidad).nombre
    };

    return materia;
}
//console.log(datosMateria(1));

// 11) Implementar una función que muestre en consola la información para todos los 
//      alumnos de la siguiente manera:
// NOTAS DE ALUMNOS
// ----------------
// RIGOBERTO MANCHU        <-- En mayúsculas
// Análisis matemático: 5
// ....
// ALUMNO 2
// ...
export const infoAlumnos = () => {
    let rt = 'NOTAS DE ALUMNOS\n----------------\n';
    
    database.alumnos.map((a) => {
        rt = rt + a.nombre.toUpperCase() + '\n';
        database.calificaciones
            .filter((c) => c.alumno === a.id)
            .map((ca) => {
                rt = rt + helpers.getMateriaById(ca.materia).nombre + ': ' + ca.nota + '\n';
            });
    });

    return rt;
}
//console.log(infoAlumnos());

// 12) Implementar una función que guarde la calificación de un alumno y una materia
//     La función recibirá: 'nombre del alumno', 'nombre de la materia', 'nota'
//     Si el alumno y/o la materia no existen deberán crearlos en sus respectivas tablas
export const nuevaCalificacion = (nombreAlumno, nombreMateria, nota) => {
   
    let idAlumno = helpers.getAlumnoByNombre(nombreAlumno)?.id;
    if(!idAlumno) idAlumno = insertarAlumno(nombreAlumno, 0, 0);

    let idMateria = helpers.getMateriaByNombre(nombreMateria)?.id;
    if(!idMateria) idMateria = insertarMateria(nombreMateria, [], 0);

    database.calificaciones = [
        ...database.calificaciones, 
        { 
            alumno: idAlumno, 
            materia: idMateria,
            nota
        }
    ];

    return 'Agregado Alumno: ' + nombreAlumno + ' - Materia: ' + nombreMateria + ' - Nota: ' + nota;
}
export const insertarAlumno = (nombre) => {
    const newID = helpers.lastID(database.alumnos) + 1;
    database.alumnos = [...database.alumnos, { id: newID, nombre }];
    return newID;
}
export const insertarMateria = (nombre) => {
    const newID = helpers.lastID(database.materias) + 1;
    database.materias = [...database.materias, { id: newID, nombre }];
    return newID;
}
// console.log(nuevaCalificacion('Juan', 'Materianueva', 10));
// console.log(nuevaCalificacion('Suzana Mendez', 'Materianueva', 10));
// console.log(database.calificaciones);