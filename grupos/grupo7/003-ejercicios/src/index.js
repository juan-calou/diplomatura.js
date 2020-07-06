import Collection from './1.collection';
import Vector from './2.vector';
import {delay1, delay2, run1, run2} from './3.delay';
import {printDataUser,printDataUsers} from './4.api';
import {getRemoteData, getRemoteDatas} from './5.api';
import {runConPromise,runConAsync} from './6.delay';

const coleccion = new Collection([1,2,3]);
const coleccion1 = new Collection();

console.clear();
console.log("##################### PUNTO 1 #####################")
console.log("Lista original:",coleccion);
console.log("Lista original vacía:",coleccion1);
coleccion.add(4);
console.log("Lista con nuevo elemento (4):",coleccion);
coleccion1.add(4);
console.log("Lista con nuevo elemento (4) a la vacía:",coleccion1);
coleccion.delete(2);
console.log("Lista sin elemento borrado (2):",coleccion);
console.log("Validar si tiene el 3:",coleccion.has(3));

 
console.log("##################### PUNTO 2 #####################")
let vec = new Vector(3,2);
console.log("El vector creado: " + vec.toString());
console.log("Los getters: x=" + vec.getX + "; y=" + vec.getY);
console.log("El vector con la suma de 5 y 6: " + vec.sumar(new Vector(5, 6)).toString());

 
console.log("##################### PUNTO 3 #####################")
/* setTimeout(()=>console.log("Hola"),1000);
delay1("Holas",1000);
delay2("Holas",1000);
run1();
run2(); */

 
console.log("##################### PUNTO 4 #####################")
/* printDataUser(1);
printDataUsers() */; 

 
console.log("##################### PUNTO 5 #####################")
/* getRemoteData(1);
getRemoteDatas(); */

 
console.log("##################### PUNTO 6 #####################")
//runConPromise();
runConAsync()

