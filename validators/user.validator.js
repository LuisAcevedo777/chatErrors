const {check, validationResult} = require('express-validator')
const validateResult = require('../utils/validate')

const createUserValidator =[

    
check('username', 'Error con el nombre de Usuario')
.exists()
.withMessage('El usuario debe existir')
.notEmpty()
.withMessage('El usuario no debe estar vacio')
.isString()
.isLength({min: 6})
.withMessage('El usuario debe tener minimo caracteres'),


check('email',  'Error con el campo email')
.exists()
.withMessage('El email debe existir')
.notEmpty()
.withMessage('El email no debe estar vacio')
.isString()
.withMessage('El email ser string')
.isLength({min: 8})
.withMessage('El email debe tener minimo 8 caracteres')
.isEmail()
.withMessage('No tiene formato de email correcto'),

check('password',  'Error con el campo password')
.exists()
.withMessage('El password debe existir')
.notEmpty()
.withMessage('El password no debe estar vacio')
.isString()
.isLength({min: 6})
.withMessage('El password debe tener minimo 6 caracteres'),

(req,res,next)=>{ 
validateResult(req,res,next)}

]
const updateUserValidator =[]
module.exports = {
    createUserValidator,
    updateUserValidator
}