import express from 'express';
import {
  getData,
  getDataById,
  insertData,
  updateData,
  deleteData,
} from '../db.js';

const nomCollection = 'calificaciones';
const router = express.Router();

router.get('/', async function (req, res) {
  let rta;
  try {
    rta = await getData(nomCollection, req.query.nombre);
  } catch (e) {
    console.log(e);
  }
  res.json(rta);
});

router.get('/:id', async function (req, res) {
  let rta;
  try {
    rta = await getDataById(nomCollection, req.query.id);
  } catch (e) {
    console.log(e);
  }
  res.json(rta);
});

router.post('/', async function (req, res) {
  let rta;
  try {
    rta = await insertData(nomCollection, {
      alumno: req.body.alumno,
      materia: req.body.materia,
      nota: req.body.nota,
    });
  } catch (e) {
    console.log(e);
  }
  if (rta.insertedCount) res.json(rta.ops);
  else res.json(rta);
});

router.put('/:id', async function (req, res) {
  let rta;
  try {
    rta = await updateData(nomCollection, {
      id: req.params.id,
      element: {
        alumno: req.body.alumno,
        materia: req.body.materia,
        nota: req.body.nota,
      },
    });
  } catch (e) {
    console.log(e);
  }
  if (rta.ok) res.json(rta.value);
  else res.json(rta);
});

router.delete('/:id', async function (req, res) {
  let rta;
  try {
    rta = await deleteData(nomCollection, req.params.id);
  } catch (e) {
    console.log(e);
  }
  res.json({ ok: rta.deletedCount === 1 });
});

export default router;
