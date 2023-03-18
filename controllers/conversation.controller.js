const conversationServices = require('../services/conversation.service')



const createBothConversation = async (req, res)=> {

    try{
    
        const {title, typeConversationId}= req.body
    const dataBoth = await conversationServices.createBothConversationService({title, typeConversationId: 1})
    res.status(201).json(dataBoth)}
    
    catch(error){res.status(400).json(error)}
    
    }
    
    const createTeamConversation = async (req, res)=> {
    
        try{
        
            const {title, typeConversationId} = req.body
        const dataTeam = await conversationServices.createTeamConversationService({title, typeConversationId: 2})
        res.status(201).json(dataTeam)}
        
        catch(error){res.status(400).json(error)}
        
        }
    
        const getAllConversationOneUser = async (req, res)=> {
    
            try{
                const {idUser} = req.params
            const dataAll = await conversationServices.getAllConversationOneUserService(idUser)
            res.json(dataAll)}
            
            catch(error){res.status(400).json(error)}
            
            }


            const getOneConversationAllUsers = async (req, res)=> {
    
                try{
                
                    const {idConver} = req.params
                const dataOneConversation = await conversationServices.getOneConversationAllUsersService(idConver)
                res.json(dataOneConversation)}
                
                catch(error){res.status(400).json(error)}
                
                }

                const deleteOneConversation = async (req, res)=> {
    
                    try{
                    
                        const {id} = req.params
                        console.log(id)
                     await conversationServices.deleteOneConversationService(id)
                    res.status(201).send()}
                    
                    catch(error){res.status(400).json(error)}
                    
                    }




    
            module.exports = {
    
               createBothConversation,
                createTeamConversation,
                getOneConversationAllUsers,
                getAllConversationOneUser,
                deleteOneConversation}