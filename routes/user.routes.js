const {Router} =  require('express')
const{createUser,getOneUser,getAllUsers,} = require('../controllers/user.controller')
const {createUserValidator} = require('../validators/user.validator')


 const userRouter = Router()

userRouter.post('/api/v1/user', createUserValidator, createUser)
userRouter.get('/api/v1/user/:id', getOneUser)
userRouter.get('/api/v1/user', getAllUsers)



 module.exports= userRouter