import { MongoClient } from 'mongodb';

export async function connectMongoClient() {
  try {
    const url = 'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT;
    console.log('Conectarse a: ' + url);
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    return client;
  } catch (err) {
    console.log('Fallo la conexión: ' + err);
  }
  return null;
}

export function connectMongoDb(client) {
  try {
    if (client) {
      console.log('Conectarse a la base: ' + process.env.DB_NAME);
      const db = client.db(process.env.DB_NAME);
      return db;
    }
  } catch (err) {
    console.log('Fallo la conexión a la base: ' + err);
  }
  return null;
}

export function disconnectMongoClient(client) {
  try {
    const url = 'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT;
    client.close();
    return true;
  } catch (err) {
    console.log('Fallo la desconexión: ' + err);
  }
  return false;
}
