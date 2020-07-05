import Collection from './1.collection';

const coleccion = new Collection([1,2,3]);
const coleccion1 = new Collection();

console.clear();
console.log("Lista original:\n",coleccion);
console.log("Lista original vacía:\n",coleccion1);

coleccion.add(4);
console.log("Lista con nuevo elemento (4):\n",coleccion);
coleccion1.add(4);
console.log("Lista con nuevo elemento (4) a la vacía:\n",coleccion1);

 coleccion.delete(2);
 console.log("Lista sin elemento borrado (2):\n",coleccion);

 console.log("Validar si tiene el 3:\n",coleccion.has(3));
