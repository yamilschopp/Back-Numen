const {check} = require('express-validator');

const checks = [
    check('marca')
        .notEmpty().withMessage('El campo marca no puede estar vacio')
        .isString().withMessage('El campo debe ser un string'),
    check('modelo')
        .notEmpty().withMessage('El campo modelo no puede estar vacio')
        .isString().withMessage('El campo debe ser un string'),
    check('tipo')
        .notEmpty().withMessage('El campo tipo no puede estar vacio')
        .isString().withMessage('El campo debe ser un string'),
    check('precio')
        .notEmpty().withMessage('El campo precio no puede estar vacio')
        .isNumeric().withMessage('El campo debe ser un number'),
];

module.exports = checks