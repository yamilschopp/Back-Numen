const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config();

const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_CONNECT);
        console.log('Base de datos conectada');
    }catch {
        console.log('Error en conexión');
    }
};

module.exports = {connect}