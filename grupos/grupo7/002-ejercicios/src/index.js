// 1) Importar el objeto 'database' del archivo "./basededatos"
import { database } from './basededatos';
import { helpers} from './helpers';

console.log(helpers.universidadPorId(1)); 
console.log(helpers.materiaPorId(1)); 
console.log(helpers.profesorPorId(1)); 
console.log(helpers.tablaUltimoId("universidades"));

//console.log(helpers.tablaUltimoId("universidades"));
helpers.notasAlumnos();
console.log(helpers.agregarProvincia("Chubut"));
helpers.guardarNota("al","ma",6);

