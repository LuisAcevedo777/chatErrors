const {Router} =  require('express')
const {createMessages} = require('../controllers/message.controller')

 const messageRouter = Router()

messageRouter.post('/api/v1/message', createMessages)

 module.exports= messageRouter