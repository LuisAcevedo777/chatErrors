const messageServices = require('../services/message.service')



const createMessages = async (req, res)=> {

    try{
    
        const createMessageBody = req.params
    const dataCreateMessage = await messageServices.createMessagesService(createMessageBody)
    res.status(201).json(dataCreateMessage)}
    
    catch(error){res.status(400).json(error)}
    
    }

    module.exports = {

        createMessages
    }