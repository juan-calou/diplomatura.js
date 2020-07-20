import { MongoClient, ObjectId } from 'mongodb';
import {
  connectMongoClient,
  connectMongoDb,
  disconnectMongoClient,
} from './db';

async function procesoGeneral(funcionEspecifica, mensaje) {
  let client = null;
  try {
    console.log(mensaje);
    client = await connectMongoClient();
    const db = connectMongoDb(client);
    const result = await funcionEspecifica(db);
    return result;
  } catch (err) {
    console.log(err);
  } finally {
    disconnectMongoClient(client);
  }
  return null;
}

async function getData(collection) {
  return procesoGeneral(async (db) => {
    const res = await db.collection(collection).find({}).toArray();
    return res;
  }, `Obtiene todos los elementos de ${collection}`);
}

async function getDataById(collection, id) {
  return procesoGeneral(async (db) => {
    const result = await db
      .collection(collection)
      .find({ id: +id })
      .toArray();
    return result[0];
  }, `Obtener el elemento ${id} de ${collection}`);
}

async function getDataByName(collection, nombre) {
  return procesoGeneral(async (db) => {
    const result = await db
      .collection(collection)
      .find({ nombre: { $regex: nombre } })
      .toArray();
    return result;
  }, `Obtener elementos con nombre ${nombre} de ${collection}`);
}

async function pushData(collection, item) {
  return procesoGeneral(async (db) => {
    await db.collection(collection).insertOne(item);
    return item;
  }, `Insertar ${item.nombre ? item.nombre : 'un elemento'} en ${collection}`);
}

async function putData(collection, _id, item) {
  return procesoGeneral(async (db) => {
    const result = await db
      .collection(collection)
      .findOneAndUpdate(
        { _id: new ObjectId(_id) },
        { $set: item },
        { returnOriginal: false }
      );
    return result.value;
  }, `Modificar el elemento ${_id} en ${collection}`);
}

async function deleteData(collection, _id) {
  return procesoGeneral(async (db) => {
    const result = await db
      .collection(collection)
      .deleteOne({ _id: new ObjectId(_id) });
    return { ok: result.deletedCount === 1 };
  }, `Eliminar el elemento ${_id} en ${collection}`);
}

export const helpers = {
  getData,
  getDataById,
  getDataByName,
  pushData,
  putData,
  deleteData,
};
