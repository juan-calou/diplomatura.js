import express from 'express';
import { helpers } from '../helpers.js';

const router = express.Router();
const coleccion = 'materias';

router.get('/', async function (req, res) {
  let alumnos = '';
  if (req.query.nombre) {
    alumnos = await helpers.getDataByName(coleccion, req.query.nombre);
  } else {
    alumnos = await helpers.getData(coleccion);
  }
  res.json(alumnos);
});

router.get('/:id', async function (req, res) {
  const alumno = await helpers.getDataById(coleccion, req.params.id);
  res.json(alumno);
});

const parseData = (body) => {
  const item = {
    id: body.id,
    nombre: body.nombre,
    universidad: body.universidad,
  };
  return item;
};

router.post('/', async function (req, res) {
  const alumno = await helpers.pushData(coleccion, parseData(req.body));
  res.json(alumno);
});

router.put('/:id', async function (req, res) {
  const alumno = await helpers.putData(
    coleccion,
    req.params.id,
    parseData(req.body)
  );
  res.json(alumno);
});

router.delete('/:id', async function (req, res) {
  const alumno = await helpers.deleteData(coleccion, req.params.id);
  res.json(alumno);
});

export default router;
