const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 3000;
app.listen(port, () => { // la funcion que levante el servidor
    console.log(`Example app listening on port ${port}`)
})