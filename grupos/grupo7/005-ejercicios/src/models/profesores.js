import mongoose, {Schema, model} from 'mongoose';

//let  schema = mongoose.Schema;

const SchemaProfesor = new Schema({
    id: {type: Number},
    nombre: {type: String}
});

export const Profesores = model('profesor',SchemaProfesor,'profesor');