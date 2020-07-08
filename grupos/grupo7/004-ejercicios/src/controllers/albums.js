import express from 'express';
import fetch from 'node-fetch';

var albumsApi = express.Router();

albumsApi.get('/', function (req, res) {
  //let rta = [];
  fetch('https://jsonplaceholder.typicode.com/albums')
  .then((value) => value.json())
  .then((data) => data.map((obj) =>{
      fetch('https://jsonplaceholder.typicode.com/users/' + obj.userId)
          .then(value => value.json())
          .then(o=>{
              //console.log(obj);
              obj.Usuario = o;              
              //console.log(obj);
              //return obj;
              //rta.push({id: obj.id, title: obj.title, user: o});
              //console.log(rta);
               })}))
  .then((d) => {console.log(d); res.send("<p>Albums: </p>" + d);})
  .catch((e) => res.send("Error: " + e));
  //res.send('<p>Albums: </p>' + rta);
});

albumsApi.get('/:id', function (req, res) {
  res.send(`Hola album ${req.params.id}.`);
});

/* Un ejemplo de fetch del ejercicio anterior:
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


  // .then(o => o.map(element => "Name: " + element.name + " - City: " + element.address?.city))
  //       .then(obj => console.log("Imprimo usuarios: \n" + obj))
   //     .catch(e => console.log("Error: " + e));

export default albumsApi;
