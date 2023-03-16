const Conversation = require('../models/conversation.model')



class conversationServices{




static async createBothConversationService(conversationBody){

try{
const conversationBothCreated = await Conversation.create(conversationBody)
return conversationBothCreated}
catch(error){throw error}}



    static async createTeamConversationService(conversationTeamBody){
    
    try{
    const conversationTeamCreated = await Conversation.create(conversationTeamBody)
    return conversationTeamCreated}
    catch(error){throw error}}



static async getOneConversationAllUsersService(idConversation){

    try{

        const conversationGetted = await Conversation.findByPk(idConversation)
        return conversationGetted}
        catch(error){throw error}}

        static async getAllConversationOneUserService(idUser){

try{

    const conversationsGetted = await Conversation.findAll({where: {user_id: idUser},})
    return conversationsGetted}
    catch(error){throw error}}

    static async deleteOneConversationService(idDeleteConversation){

        try{
        
            const conversationDeleted = await Conversation.destroy(idDeleteConversation)
            return conversationDeleted}
            catch(error){throw error}}
}

module.exports = conversationServices

