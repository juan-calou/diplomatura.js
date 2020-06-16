import { database } from './basededatos';

// 2) Implementar una función que obtenga una universidad por Id
// 🤓 Tip: pueden ir probando las funciones usando console.log() asegurándose que los resultados sean los esperados
const universidadPorId= (id) => database.universidades.find(u => u.id===id);
//console.log(universidadPorId(1));

// 3) Implementar una función que obtenga un profesor por Id
const profesorPorId= (id) => database.profesores.find(p => p.id===id);
//console.log(profesorPorId(1));

// 4) Implementar una función que obtenga una materia por Id
// 🤓 Tip: Comparar con la función del ejercicio (3) y ver si se les ocurre una función genérica que sirva para cualquier tabla
const tablaPorId = (tabla,id) => database[tabla].find(o => o.id===id);
const materiaPorId = (id) => tablaPorId("materias",id);
//console.log(materiaPorID(1));
// 5) Crear un objeto 'helpers' que contenga las funciones como métodos


// 6) Mover helpers y el todo el co´digo a un módulo, creando un nuevo archivo helpers.js

// 7) Crear un nuevo método en helpers que devuelva el último ID utilizado en una tabla
const tablaUltimoId = (tabla) => {
    let maxId=0;
    database[tabla].forEach(e => { 
        if (e.id>maxId)
            maxId=e.id;
    });
    return maxId;
}

export const helpers = {
    universidadPorId : (id) => universidadPorId(id),
    profesorPorId : (id) => profesorPorId(id),
    materiaPorId : (id) => materiaPorId2(id),
    tablaUltimoId : (tabla) => tablaUltimoId(tabla), 
    notasAlumnos : () => notasAlumnos(),
    agregarProvincia : (prov) => agregarProvincia(prov),
    guardarNota: (alumno, materia, nota) => guardarNota(alumno,materia, nota)
}

// 8) Importar helpers desde su propio módulo

// 9) Implementar una función que permite insertar una nueva provincia en la base de datos
//    La función tomará como parámetro el nombre de la provincia y devolverá el ID de la nueva provincia
// 🤓 Tip: Reusar una o más funciones de helper
const agregarProvincia = (provincia) => {
    let id=tablaUltimoId("provincias")+1;
    let p={
        id: id,
        nombre: provincia
    };
    database.provincias.push(p);
    return id;

};

// 10) Implementar una función que reciba el id de una materia y devuelva la materia son los ids de universidad y profesores resueltos a sus nombres
const materiaPorId2=(id) => {
    let m=materiaPorId(id);
    return {id: m.id,
            nombre: m.nombre,
            profesores : m.profesores.map (p => profesorPorId(p).nombre),
            universidad : universidadPorId(m.universidad).nombre
        }; 
    }
// 11) Implementar una función que muestre en consola la información para todos los alumnos de la siguiente manera:
// NOTAS DE ALUMNOS
// ----------------
// RIGOBERTO MANCHU        <-- En mayúsculas
// Análisis matemático: 5
// ....
// ALUMNO 2
// ...
const notasAlumnos=() => {
    console.log("NOTAS DE ALUMNOS");
    database.alumnos.forEach(a => { 
        console.log(a.nombre.toUpperCase());
        database.calificaciones.filter(c => c.alumno===a.id).map(c => {
            return {materia:materiaPorId(c.materia).nombre,nota:c.nota}}).forEach(m => console.log(m.materia + ": "+m.nota) )
    });
}
// 12) Implementar una función que guarde la calificación de un alumno y una materia
//     La función recibirá: 'nombre del alumno', 'nombre de la materia', 'nota'
//     Si el alumno y/o la materia no existen deberán crearlos en sus respectivas tablas
const guardarNota=(alumno,materia,nota) => {
    let a=database.alumnos.find(al => al.nombre === alumno);
    if (!a)
    {
        a={id: tablaUltimoId("alumnos")+1,nombre: alumno, edad: Math.floor(Math.random() * (50 - 18)) + 18, provincia: 1};
        database.alumnos.push(a);
    }
    let m=database.materias.find(ma => ma.nombre=== materia);
    if (!m)
    {
        m={id: tablaUltimoId("materias")+1, nombre: materia, profesores: [4], universidad: 2 };
        database.materias.push(m);
    }
    let n= { alumno: a.id, materia: m.id, nota: nota };
    database.calificaciones.push(n);
}

