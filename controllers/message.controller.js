const messageServices = require('../services/message.service')



const createMessages = async (req, res, next)=> {

    try{
    
        const createMessageBody = req.body
    const dataCreateMessage = await messageServices.createMessagesService(createMessageBody)
    res.status(201).json(dataCreateMessage)}
    
    catch(error){next(error)}    //{res.status(400).json(error)}
    
    }

    module.exports = {

        createMessages
    }