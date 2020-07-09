import express from 'express';
import fetch from 'node-fetch';

var albumsApi = express.Router();

albumsApi.get('/', async function (req, res) {
    const albums = await getAlbums();
    const users = await fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json());
    let rta = albums.map(obj => {return{id: obj.id, title: obj.title, user: users.find(e=>e.id === obj.userId)};});
    //console.log(rta);
    res.send('<p>Albums: </p>' + rta);
});

albumsApi.get('/:id', async function (req, res) {
    const album = await getAlbums(req.params.id);
    const phot = await fetch('https://jsonplaceholder.typicode.com/albums/' + req.params.id + '/photos').then(value => value.json());
    album.photos = phot.map(e=>{return {id: e.id, title: e.title, url: e.url, thumbnailUrl: e.thumbnailUrl};});
    //console.log(album);
    //res.send(`Hola album ${req.params.id}.`);
    res.send('<p>Albums: </p>' + album);
});

function getAlbums (id){
    if (id)
        return fetch('https://jsonplaceholder.typicode.com/albums/' + id)
                    .then((value) => value.json())
                    .catch((e) => res.send("Error: " + e));
    else        
        return fetch('https://jsonplaceholder.typicode.com/albums')
            .then((value) => value.json())
            .catch((e) => res.send("Error: " + e));
}

export default albumsApi;
