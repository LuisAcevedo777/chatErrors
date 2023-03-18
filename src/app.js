const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const userRouter = require('../routes/user.routes')
const conversationRouter = require('../routes/conversation.routes')
const messageRouter = require('../routes/message.routes')
const db = require('../utils/database')
const initModels = require('../models/initModels')

const app = express()

const PORT = 8000
initModels()



app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(userRouter)
app.use(conversationRouter)
app.use(messageRouter)




db.authenticate()
.then(()=>{console.log('conexion autenticada')}).catch((error)=>{console.log(error)})

db.sync({alter: true}).then(()=>{console.log('sincronizadas tablas')})
.catch(error=>{console.log(error)})


app.listen(PORT, ()=>{

console.log(`servidor corriendo en ${PORT}`)

})