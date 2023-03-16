const {Router} =  require('express')
const{createUser,getOneUser,getAllUsers,} = require('../controllers/user.controller')

 const userRouter = Router()

userRouter.post('/api/v1/user', createUser)
userRouter.get('/api/v1/user/:id', getOneUser)
userRouter.get('/api/v1/user', getAllUsers)



 module.exports= userRouter