const express = require ('express');
const router = express.Router()
const {index} = require('../controller/indexController')


router.get('/', index)

module.exports = router