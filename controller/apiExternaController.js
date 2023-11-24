const axios = require('axios')

const apiExternalController = async (req, res) => {
    try {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
      res.json(data);
    } catch (error) {
      res.status(400).json({ 
            msg: 'Hubo un problema al conectar con la API externa' 
        });
    }
};

module.exports = {apiExternalController}