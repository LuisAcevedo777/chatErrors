const conversationServices = require('../services/conversation.service')



const createBothConversation = async (req, res, next)=> {

    try{
    
        const {title, typeConversationId}= req.body
    const dataBoth = await conversationServices.createBothConversationService({title, typeConversationId: 1})
    res.status(201).json(dataBoth)}
    
    catch(error){next(error)}  //{res.status(400).json(error)}
    
    }
    
    const createTeamConversation = async (req, res, next)=> {
    
        try{
        
            const {title, typeConversationId} = req.body
        const dataTeam = await conversationServices.createTeamConversationService({title, typeConversationId: 2})
        res.status(201).json(dataTeam)}
        
        catch(error){next(error)}           //{res.status(400).json(error)}
        
        }
    
        const getAllConversationOneUser = async (req, res, next)=> {
    
            try{
                const {idUser} = req.params
            const dataAll = await conversationServices.getAllConversationOneUserService(idUser)
            res.json(dataAll)}
            
            catch(error){next(error)}   //{res.status(400).json(error)}
            
            }


            const getOneConversationAllUsers = async (req, res, next)=> {
    
                try{
                
                    const {idConver} = req.params
                const dataOneConversation = await conversationServices.getOneConversationAllUsersService(idConver)
                res.json(dataOneConversation)}
                
                catch(error){next(error)}    //{res.status(400).json(error)}
                
                }

                const deleteOneConversation = async (req, res, next)=> {
    
                    try{
                    
                        const {id} = req.params
                        console.log(id)
                     await conversationServices.deleteOneConversationService(id)
                    res.status(201).send()}
                    
                    catch(error){next(error)}   //{res.status(400).json(error)}
                    
                    }




    
            module.exports = {
    
               createBothConversation,
                createTeamConversation,
                getOneConversationAllUsers,
                getAllConversationOneUser,
                deleteOneConversation}