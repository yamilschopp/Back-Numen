const express = require ('express');
const router = express.Router()
const {apiExternalController} = require('../controller/apiExternaController')


router.get('/', apiExternalController)

module.exports = router