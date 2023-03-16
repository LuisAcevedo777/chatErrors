const User = require('../models/user.model')

class userServices{

static async createUserService(newUser){

try{
const userCreated = await User.create(newUser)
return userCreated}
catch(error){throw error}}

static async getOneUserService(id){

    try{

        const userGetted = await User.findByPk(id)
        return userGetted}
        catch(error){throw error}}

        static async getAllUsersService(){

try{

    const usersGetted = await User.findAll()
    return usersGetted}
    catch(error){throw error}}


}

module.exports = userServices