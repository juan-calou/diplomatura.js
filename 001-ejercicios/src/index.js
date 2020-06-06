import {
  materiasAprobadasByNombreAlumno,
  expandirInfoUniversidadByNombre,
  promedioDeEdad,
  alumnosConPromedioMayorA,
} from './moduloEjercicios';

import baseDeDatos from './basededatos';

// materiasAprobadasByNombreAlumno
console.log('------------------------------------------------------');
console.log('Ejecutando ejercicios materiasAprobadasByNombreAlumno.');

const materiasAprobadasPorSuzana = materiasAprobadasByNombreAlumno(
  'Suzana Mendez'
);
console.log('Materias aprobadas por Suzana:', materiasAprobadasPorSuzana);

const materiasAprobadasPorAlina = materiasAprobadasByNombreAlumno(
  'Alina Robles'
);
console.log('Materias aprobadas por Alina:', materiasAprobadasPorAlina);

// expandirInfoUniversidadByNombre
console.log('------------------------------------------------------');
console.log('Ejecutando ejercicios expandirInfoUniversidadByNombre.');

const infoUniversidadComahue = expandirInfoUniversidadByNombre(
  'Universidad del Comahue'
);
console.log('Info comahue:', infoUniversidadComahue);

const infoUniversidadRio = expandirInfoUniversidadByNombre(
  'Universidad de Rio Negro'
);
console.log('Info rio negro:', infoUniversidadRio);

const promedioEdad = promedioDeEdad();
console.log('Promedio de Edad:',promedioEdad);

const promedioMayorA = alumnosConPromedioMayorA(5);
console.log('Alumnos con promedio mayor a 5:',promedioMayorA);