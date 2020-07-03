import fetch from 'node-fetch';

export async function api_async(){
    // recordar que fetch devuelve una promise, entonces puede hacer fetch(....).then(resultado => {.... })
    
    try
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const list = await response.json();
        for (const element of list){
            console.log('Nombre: '+element.name+' - Ciudad: '+element.address.city);
        };
    }
    catch(error){
        console.log(error);
    }
}