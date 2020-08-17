import express from 'express';
import bodyParser from 'body-parser';
import alumnosRoutes from './controllers/alumnos';
import profesoresRoutes from './controllers/profesores';
import materiasRoutes from './controllers/materias';
import calificacionesRoutes from './controllers/calificaciones';
import { conectar } from './db';
//import mongoose, {Schema, model} from 'mongoose';

const PORT = 8080;
const app = express();
app.use(bodyParser.json());

app.use('/alumnos', alumnosRoutes);
app.use('/profesores', profesoresRoutes);
app.use('/materias', materiasRoutes);
app.use('/calificaciones', calificacionesRoutes);

app.get('/', function (req, res) {
  res.json({ mensaje: 'Bienvenido al servidor de la Universidad' });
});

//conectar();
app.listen(PORT);
console.log(`Express started on port ${PORT}`);

//mongoose.connect('mongodb://localhost/Diplomatura', {useNewUrlParser: true, useUnifiedTopology: true },function(err) {
/*   mongoose.connect('mongodb+srv://dip:gAf4ILLOmF6qFDLl@clusterrab.lwaco.azure.mongodb.net/diplomaturaJS?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true },function(err) {
  if(err) 
    console.log('ERROR: connecting to Database. ' + err);
  else
    console.log("Connected to the mongodb");
  //app.listen(PORT);  
  app.listen(PORT,function() {console.log(`Express started on http://localhost:${PORT}`);});
  //console.log(`Express started on port ${PORT}`);
  //app.listen(3000, function() {console.log("Node server running on http://localhost:3000");
});  */
