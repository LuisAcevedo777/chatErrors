const Conversation = require('../models/conversation.model')
const Message = require('../models/message.model')
const UserConversation = require('../models/userConversation.model')
const User = require('../models/user.model')
const { Op } = require("sequelize");

class conversationServices{




static async createBothConversationService({title, typeConversationId}){

try{
const conversationBothCreated = await Conversation.create({title, typeConversationId})
return conversationBothCreated}
catch(error){throw error}}



    static async createTeamConversationService({title, typeConversationId}){
    
    try{
    const conversationTeamCreated = await Conversation.create({title, typeConversationId})
    return conversationTeamCreated}

    catch(error){throw error}}



static async getOneConversationAllUsersService(idConver){

    try{

        const conversationGetted = await Conversation.findAll({where: {idConversation:idConver}, include: {
            model: User,
            include: Message
          },})
        //console.log(conversationGetted.dataValues.userId)
        return conversationGetted}
        catch(error){throw error}}

        static async getAllConversationOneUserService(idUser){

try{

    const conversationsGetted = await User.findAll({where: {id_user: idUser}, include: Conversation })
    return conversationsGetted}
    catch(error){throw error}}

    static async deleteOneConversationService(id){
        console.log(id)
        try{
        
            const conversationDeleted = await Conversation.destroy({where: {id_conversation: id}})
        
            return conversationDeleted}
            catch(error){throw error}}
}

module.exports = conversationServices

