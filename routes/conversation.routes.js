const {Router} =  require('express')

const {createBothConversation,createTeamConversation,getAllConversationOneUser,getOneConversationAllUsers,deleteOneConversation} = require('../controllers/conversation.controller')
 const conversationRouter = Router()

conversationRouter.post('/api/v1/conversationBoth', createBothConversation)
conversationRouter.post('/api/v1/conversationTeam', createTeamConversation)
conversationRouter.get('/api/v1/conversation/:idUser', getAllConversationOneUser)
conversationRouter.get('/api/v1/conversation/', getOneConversationAllUsers)
conversationRouter.delete('/api/v1/conversation/:idConversation', deleteOneConversation)
 

 module.exports= conversationRouter