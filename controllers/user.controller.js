const userServices = require('../services/user.service')

const createUser = async (req, res)=> {

try{

    const newUser = req.body
const data = await userServices.createUserService(newUser)
res.status(201).json(data)}

catch(error){res.status(400).json(error)}

}

const getOneUser = async (req, res)=> {

    try{
      
        const {id} = req.params
    const dataUser = await userServices.getOneUserService(id)
    res.json(dataUser)}
    
    catch(error){res.status(400).json(error)}
    
    }

    const getAllUsers = async (req, res)=> {

        try{
        
        const dataUsers = await userServices.getAllUsersService()
        res.json(dataUsers)}
        
        catch(error){res.status(400).json(error)}
        
        }

        module.exports = {

            createUser,
            getOneUser,
            getAllUsers
        }