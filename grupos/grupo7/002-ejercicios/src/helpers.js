// 1) Importar el objeto 'database' del archivo "./basededatos"
import { database } from './basededatos';

// 2) Implementar una función que obtenga una universidad por Id
// 🤓 Tip: pueden ir probando las funciones usando console.log() asegurándose que los resultados sean los esperados
const getUniversidadById = (id) => database.universidades.find(value => value.id === id);

// 3) Implementar una función que obtenga un profesor por Id
const getProfesorById = (id) => database.profesores.find(value => value.id === id);

// 4) Implementar una función que obtenga una materia por Id
// 🤓 Tip: Comparar con la función del ejercicio (3) y ver si se les ocurre una función genérica que sirva para cualquier tabla
const getTablaById = (id, tabla) => database[tabla].find(value => value.id === id);
const getTablaByName = (nombre, tabla) => database[tabla].find(value => value.nombre === nombre);
const getLastTablaId =  (tabla) => database[tabla].map(value => value.id).sort((v1,v2) => v1 < v2?1:-1)[0];
const addItem = (nombre,tabla) => {
    let nuevoId = getLastTablaId(tabla) + 1;
    database[tabla].push({id :nuevoId, nombre :nombre});
    return nuevoId;
}


// 5) Crear un objeto 'helpers' que contenga las funciones como métodos
// 6) Mover helpers y el todo el co´digo a un módulo, creando un nuevo archivo helpers.js
export const helpers = {
    getProfesorById : (id) => getTablaById(id,"profesores"),
    getMateriaById : (id) => getTablaById(id,"materias"),
    getUniversidadById : (id) => getTablaById(id,"universidades"),
    getProvinciaById : (id) => getTablaById(id,"provincias"),
    getAlumnoById : (id) => getTablaById(id,"alumnos"),

    getProfesorByName : (name) => getTablaByName(name,"profesores"),
    getMateriaByName : (name) => getTablaByName(name,"materias"),
    getUniversidadByName : (name) => getTablaByName(name,"universidades"),
    getProvinciaByName : (name) => getTablaByName(name,"provincias"),
    getAlumnoByName : (name) => getTablaByName(name,"alumnos"),
    
    getLastProfesorId : () => getLastTablaId("profesores"),
    getLastMateriaId : () => getLastTablaId("materias"),
    getLastUniversidadId : () => getLastTablaId("universidades"),
    getLastProvinciaId : () => getLastTablaId("provincias"),
    getLastAlumnoId : () => getLastTablaId("alumnos"),

    addProfesor : (nombre) => addItem(nombre,"profesores"),
    addMateria : (nombre) => addItem(nombre,"materias"),
    addUniversidad : (nombre) => addItem(nombre,"universidades"),
    addProvincia : (nombre) => addItem(nombre,"provincias"),
    addAlumno : (nombre) => addItem(nombre,"alumnos"),
    addCalificiacion : (alumno,materia,nota) => {
        let objMat = getTablaByName(materia,"materias");
        let objAlu = getTablaByName(alumno,"alumnos");

        let idMat = objMat===undefined? addItem(materia,"materias"): objMat.id;
        let idAlu = objAlu===undefined? addItem(alumno,"alumnos"): objAlu.id;

        database.calificaciones.push({alumno: idAlu, materia: idMat, nota: nota});
        return database.calificaciones[database.calificaciones.length-1];   
    },

    getMateriaExtendById : (id) => {

        let obMat = getTablaById(id, "materias");
        //console.log(obMat);
        let obUni = getTablaById(obMat.universidad,"universidades");
        //console.log(obUni);
        let listProfes = obMat.profesores.map(value => getTablaById(value,"profesores")).map(value => value.nombre);

        return {id:obMat.id, nombre:obMat.nombre, universidad:obUni.nombre, profesores:listProfes};
    },
}





