import fetch from 'node-fetch';

// fetch('..... aquí va la url')
// recordar que fetch devuelve una promise, entonces puede hacer fetch(....).then(resultado => {.... })

export function printDataUser(id){
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(value => value.json())
        .then(o => "Imprimo usuario " + id + "\nName: " + o.name + " - City: " + o.address?.city)
        .then(obj => console.log(obj))
        .catch(e => console.log("Error: " + e)); 
}

export function printDataUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        /* .then(o => o.forEach(element => 
            Object.entries(element).forEach(([key, value]) =>
                console.log(`${key} ${value}`)
            ))) */
        //.then(o => o.forEach(element => "Name: " + element.name + " - City: " + element.address?.city))
        .then(o => o.map(element => "Name: " + element.name + " - City: " + element.address?.city))
        .then(obj => console.log("Imprimo usuarios: \n" + obj))
        .catch(e => console.log("Error: " + e)); 
}


/* Un ejemplo de fetch:

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((value) => value.json())
.then((obj) => 
    fetch('https://jsonplaceholder.typicode.com/users/' + obj.userId)
        .then(value => value.json())
        .then(o=>{
            obj.Usuario = o;
            return obj;
        }))
.then((obj1) => console.log(obj1)); */