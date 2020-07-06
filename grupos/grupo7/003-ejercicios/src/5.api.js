import fetch from 'node-fetch';

// fetch('..... aquí va la url')
// recordar que fetch devuelve una promise, entonces puede hacer fetch(....).then(resultado => {.... })

export async function getRemoteData(id){
    try
    {
        const get = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
        const toJson = await get.json();
        console.log("Imprimo usuario " + id + "\nName: " + toJson.name + " - City: " + toJson.address?.city);
    }
    catch(e)
    {
        console.log("Error: " + e);
    }
}

export async function getRemoteDatas(){
    try
    {
        const get = await fetch('https://jsonplaceholder.typicode.com/users');
        const toJson = await get.json();
        const objs = await toJson.map(element => "Name: " + element.name + " - City: " + element.address?.city);
        console.log("Imprimo usuarios: \n" + objs);
    }
    catch(e)
    {
        console.log("Error: " + e);
    }
}