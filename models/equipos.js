const {Schema, model} = require('mongoose');

const schema = new Schema({
    marca:{
        type: String,
        required: true
    },
    modelo:{
        type: String,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    descripcion:{
        type: String,
    }
})




const Equipos = model('Equipo', schema);
module.exports = {Equipos}