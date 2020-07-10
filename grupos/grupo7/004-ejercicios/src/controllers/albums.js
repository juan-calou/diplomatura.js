import express from 'express';
import fetch from 'node-fetch';

var albumsApi = express.Router();

albumsApi.get('/', async function (req, res) {
    const albums = await fetch('https://jsonplaceholder.typicode.com/albums')
        .then(a=>a.json());
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(u=>u.json());
    const rta = await albums.map(obj => {
        return {
            id: obj.id, 
            title: obj.title, 
            user: users.find(e=>e.id === obj.userId)
        };
    });
    //console.log(rta);
    //res.send('<p>Albums: <br></p> <pre>' + rta + '</pre>');
    res.send(rta);
});

albumsApi.get('/:id', async function (req, res) {
    let album = await fetch('https://jsonplaceholder.typicode.com/albums/' + req.params.id)
        .then((value) => value.json())
        .catch((e) => res.send("Error: " + e));
    const phot = await fetch('https://jsonplaceholder.typicode.com/albums/' + req.params.id + '/photos')
        .then((value) => value.json())
        .catch((e) => res.send("Error: " + e));
    album.photos = phot.map(e=>{return {id: e.id, title: e.title, url: e.url, thumbnailUrl: e.thumbnailUrl};});
    //console.log(album);
    //res.send(`Hola album ${req.params.id}.`);
    res.send(album);
}); 

export default albumsApi;
