import fetch from 'node-fetch';

export function api(){
    // recordar que fetch devuelve una promise, entonces puede hacer fetch(....).then(resultado => {.... })
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(list => {
            for (const element of list)
            {
                console.log('Nombre: '+element.name+' - Ciudad: '+element.address.city);
            };
        })
        .catch(error => console.log(error));
}

