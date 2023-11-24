const {Equipos} = require('../models/equipos');

const validarMarca = async (req, res, next) => {  
    try {
        const marcaExistente = await Equipos.findOne(req.query);

        if (marcaExistente !== null) {
            next();
        } else{
            res.status(400).json({
                msg:"La marca ingresada no existe dentro de la base de datos"
            })
        }
    } catch (error) {
        res.status(400).json(error);
    }
};
  
module.exports = { validarMarca };