const Message = require('../models/message.model')


class messageServices{


    static async createMessagesService(createMessageBody){
    
    try{
    const messageCreated = await Message.create(createMessageBody)
    return messageCreated}
    catch(error){throw error}}
}

module.exports = messageServices