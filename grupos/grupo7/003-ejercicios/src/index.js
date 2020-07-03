import Collection from './1.collection';
import Vector from './2.vector';
import {delay} from './3.delayCallbacks';
import {api} from './4.api';
import {api_async} from './5.async_await';
import {delayPromise} from './6.delayPromise';

console.log("1.collection");
const col = new Collection([1,2,3]);
console.log("Lista original:",col);
col.add(4);
console.log("Lista con nuevo elemento:",col);
col.delete(2);
console.log("Lista con elemento borrado elemento:",col);
console.log("Validar si tiene el 3:",col.has(3));
console.log('');

console.log("2.vector");
//const v1 = new Vector(1,2);
console.log(new Vector(1, 2).sumar(new Vector(2, 3)));
console.log('');

/*
console.log("3.delayCallbacks");
console.log(1);
delay('Terminó 1', 3000);
console.log(2);
delay('Terminó 2', 2000);
console.log(3);
delay('Terminó 3', 1000);
console.log('');
*/

/*
console.log("4.api");
api();
console.log('');
*/

/*
console.log("5.async_await");
api_async();
console.log('');
*/

delayPromise('hola',2)
.then(response => console.log('fin'));



