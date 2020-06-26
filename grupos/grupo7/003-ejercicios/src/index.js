import Collection from './1.collection';
import {delay} from './3.delayCallbacks';

const col = new Collection([1,2,3]);

console.log("Lista original:",col);

col.add(4);
console.log("Lista con nuevo elemento:",col);

col.delete(2);
console.log("Lista con elemento borrado elemento:",col);

console.log("Validar si tiene el 3:",col.has(3));
/*
delay("Prueba de Callbacks",5000);
delay();
*/

console.log(1);
delay('Terminó 1', 3000);
console.log(2);
delay('Terminó 2', 2000);
console.log(3);
delay('Terminó 3', 1000);
