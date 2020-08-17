import { MongoClient, ObjectId } from 'mongodb';

let client;
const BD = 'local'; //'diplomaturaAtlas'

async function listDatabases(client) {
  let databasesList = await client.db().admin().listDatabases();

  console.log('Databases:');
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

async function conectar() {
  const dir = 'mongodb://localhost/Diplomatura';
  //'mongodb+srv://dip:gAf4ILLOmF6qFDLl@clusterrab.lwaco.azure.mongodb.net/diplomatura?retryWrites=true&w=majority';
  client = new MongoClient(dir, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    //await listDatabases(client);
    return client;
  } catch (e) {
    console.log(e);
  } finally {
  }
}

async function desconectar() {
  try {
    if (client) await client.close();
  } catch (e) {
    console.log(e);
  } finally {
  }
}

export async function getData(collection, text) {
  try {
    const cliente = await conectar();
    const rta = await cliente
      .db(BD)
      .collection(collection)
      .find({ nombre: { $regex: text ? text : '.' } })
      .toArray();
    await desconectar();
    console.log(rta);
    return rta;
  } catch (e) {
    console.log(e);
  }
}

export async function getDataById(collection, id) {
  try {
    const cliente = await conectar();
    const rta = await cliente
      .db(BD)
      .collection(collection)
      .find({ _id: new ObjectId(id) })
      .toArray();
    await desconectar();
    //console.log(rta);
    return rta;
  } catch (e) {
    console.log(e);
  }
}

export async function insertData(collection, element) {
  try {
    const cliente = await conectar();
    const rta = await cliente.db(BD).collection(collection).insertOne(element);
    await desconectar();
    //console.log(rta);
    return rta;
  } catch (e) {
    console.log(e);
  }
}

export async function updateData(collection, element) {
  try {
    const cliente = await conectar();
    const rta = await cliente
      .db(BD)
      .collection(collection)
      .findOneAndUpdate(
        { _id: new ObjectId(element.id) },
        { $set: element.element },
        { returnOriginal: false }
      );
    await desconectar();
    //console.log(rta);
    return rta;
  } catch (e) {
    console.log(e);
  }
}

export async function deleteData(collection, id) {
  try {
    const cliente = await conectar();
    const rta = await cliente
      .db(BD)
      .collection(collection)
      .deleteOne({ _id: new ObjectId(id) });
    await desconectar();
    //console.log(rta);
    return rta;
  } catch (e) {
    console.log(e);
  }
}
