const conversationServices = require('../services/conversation.service')



const createBothConversation = async (req, res)=> {

    try{
    
        const conversationBody = req.body
    const dataBoth = await conversationServices.createBothConversationService(conversationBody)
    res.status(201).json(dataBoth)}
    
    catch(error){res.status(400).json(error)}
    
    }
    
    const createTeamConversation = async (req, res)=> {
    
        try{
        
            const conversationTeamBody = req.body
        const dataTeam = await conversationServices.createTeamConversationService(conversationTeamBody)
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
                
                    const {idConversation} = req.params
                const dataOneConversation = await conversationServices.getOneConversationAllUsersService(idConversation)
                res.json(dataOneConversation)}
                
                catch(error){res.status(400).json(error)}
                
                }

                const deleteOneConversation = async (req, res)=> {
    
                    try{
                    
                        const {idDeleteConversation} = req.params
                    const dataDeleteC = await conversationServices.deleteOneConversationService(idDeleteConversation)
                    res.status(201).json(

                    )}
                    
                    catch(error){res.status(400).json(error)}
                    
                    }




    
            module.exports = {
    
               createBothConversation,
                createTeamConversation,
                getOneConversationAllUsers,
                getAllConversationOneUser,
                deleteOneConversation}