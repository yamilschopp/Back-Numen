const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config();

const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_CONNECT);
        console.log('Database ON');
    }catch {
        console.log('Error en database');
    }
};

module.exports = {connect}