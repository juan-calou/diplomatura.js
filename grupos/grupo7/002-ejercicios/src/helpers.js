//*************** */ EJERCICIO 1
import { database } from './baseDeDatos';


//*************** */ EJERCICIO 2
const getById = (tabla) => (id) => database[tabla].find((item)=>item.id===id);
const getUniversidadById = getById('universidades');


//*************** */ EJERCICIO 3
const getProfesorById = getById('profesores');


//*************** */ EJERCICIO 4
const getMateriaById = getById('materias');


//*************** */ EJERCICIO 7
const getMaxId = (tabla) => {
    let max = 0;
    database[tabla].map(element => max = Math.max(element.id,max));
    return max;
}

//*************** */ EJERCICIO 9
const pushElement = (table) => (element) => {
    database[table].push(element);
    return getMaxId(table);
}

const getIdProvincia = (nombrePcia) => {
    // si no existe, la agrego
    let idRta;
    if (database.provincias.filter((provincia)=>provincia.nombre === nombrePcia).length === 0) 
        {
            //idRta = getMaxId('provincias') + 1;
            let nuevaPcia = {
                id: idRta = getMaxId('provincias') + 1,
                nombre: nombrePcia
            }
            pushElement('provincias')(nuevaPcia);
        }
        else idRta = database.provincias.find((pcia)=>pcia.nombre === pcia)?.id;
    return idRta;
}

const getIdAlumno = (nombreAlumno,edad,pcia) => { 
    let idRta
    if (database.alumnos.filter((alumno)=>alumno.nombre === nombreAlumno).length === 0) 
        {
            let nuevoAlumno = {
                id: idRta = getMaxId('alumnos') + 1,
                nombre: nombreAlumno,
                edad: edad,
                provincia: getIdProvincia(pcia)
            }
            pushElement('alumnos')(nuevoAlumno);
        } else
        idRta = database.alumnos.find((alumno)=>alumno.nombre === nombreAlumno)?.id;
    return idRta;
}

const getIdMateria = (nombreMateria,profesores,universidad) => { 
    let idRta,idUni;
    // Si la uni viene vacía, le asigno la del Comahue
    idUni = !universidad?database.universidades.find((uni)=> uni.nombre === 'Universidad del Comahue')?.id:database.universidades.find((uni)=> uni.nombre === universidad)?.id
    idRta = database.materias.find((materia)=>materia.nombre === nombreMateria)?.id;
     if (!idRta) // no existe la materia, la agrego
    {       
        let profes
        if (profesores)
            profes = database.profesores.filter((profe)=>profesores.includes(profe.nombre)).map((p)=>p.id);
        let nuevaMateria = {
            id: idRta = getMaxId('materias') + 1,
            nombre: nombreMateria,
            profesores: profes,
            universidad: idUni 
            }
        pushElement('materias')(nuevaMateria);
    } 
    return idRta;
}


//*************** */ EJERCICIO 10
const getMateriaCompletoById = (id) =>{
    let mat = getMateriaById(id);
    return {
        nombre: mat.nombre,
        universidad: database.universidades.find(i => i.id === mat.universidad).nombre,
        profesores: database.profesores.filter(element => mat.profesores.indexOf(element.id) !== -1).map(ele=>ele.nombre)
    }
} 


//*************** */ EJERCICIO 11
const getNotasAlumnos = () => {
    let notas = [];
    let reporte = 'NOTAS DE ALUMNOS\n----------------';
    database.alumnos.forEach((alumno) => {
        reporte += ('\n' + alumno.nombre.toUpperCase());
        reporte += database.calificaciones.filter((calif) => calif.alumno === alumno.id).map((elemento)=>'\n' + getMateriaById(elemento.materia).nombre + ': ' + elemento.nota);
    })
    return reporte;
}

const imprimirNotasAlumnos = () =>{
    console.log(getNotasAlumnos());
}

//*************** */ EJERCICIO 12
const pushCalificacion = (nombreAlumno, nombreMateria, nota) => {
    database.calificaciones.push({
        alumno: getIdAlumno(nombreAlumno),
        materia: getIdMateria(nombreMateria),
        nota: nota
    }) 
    //console.log('ALUMNOS ==============================',database.alumnos);
    //console.log('MATERIAS ==============================',database.materias);
}

export const helpers = {
    getUniversidadById,
    getProfesorById,
    getMateriaById,
    getMaxId,
    getIdProvincia,
    getMateriaCompletoById,
    imprimirNotasAlumnos,
    pushCalificacion
};