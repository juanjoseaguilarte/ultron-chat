const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mensajeSchema = new Schema({

    nombre: String,
    texto: String,
    

}, { timestamps: true });


//asociamos la coleccion mensaje con el esquema mensaje
module.exports = mongoose.model('mensaje', mensajeSchema);