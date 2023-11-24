const {Equipos} = require('../models/equipos');

const validarId = async (req, res, next) =>{
    try{
        const busqueda = await Equipos.findById(req.params.id)
        if(busqueda !== null){
            next()
        } else{
            res.status(400).json({
                msg:"El id" + req.params.id + "es inválido"
            })
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {validarId}