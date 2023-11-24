const {Equipos} = require('../models/equipos')

const apiController = {

    async apiList (req, res){
        const list = await Equipos.find()
        res.json(list)
    },

    async apiFindId (req, res){
        const list = await Equipos.findById(req.params.id)
        res.json(list)
    },

    async apiFindOne (req, res){
        const list = await Equipos.findOne(req.query)
        res.json(list)
    },

    async apiSearch (req, res){
        const list = await Equipos.find(req.query)
        res.json(list)
    },

    async apiCrearProducto (req, res){
        const nuevoProducto = new Equipos(req.body)
        await nuevoProducto.save()
        res.status(201).json(nuevoProducto)
    },

    async apiPut(req, res){
        await Equipos.findByIdAndUpdate(req.params.id, req.body)
        const resultado = await Equipos.findById(req.params.id)
        res.status(201).json(resultado)
    },

    async apiDelete(req, res){
        await Equipos.findByIdAndDelete(req.params.id)
        res.status(200).json({
            msg: "El objeto de id" + req.params.id + "fue borrado exitosamente"        
        })
    },
}

module.exports = apiController