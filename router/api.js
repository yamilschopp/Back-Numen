const express = require ('express');
const router = express.Router()
const apiController = require('../controller/apiController')
const {validarId} = require('../middlewares/validarId')
const checks = require('../middlewares/checks')
const {validarChecks} = require('../middlewares/validarChecks')
const {validarMarca} = require('../middlewares/validarMarca')


router.get('/list', apiController.apiList);
router.get('/buscarid/:id', validarId, apiController.apiFindId);
router.get('/buscarone', validarMarca, apiController.apiFindOne);
router.get('/buscar', validarMarca, apiController.apiSearch);


router.post('/crear', apiController.apiCrearProducto);

router.put('/editar/:id', validarId, checks, validarChecks, apiController.apiPut);

router.delete('/eliminar/:id', validarId, apiController.apiDelete);

module.exports = router