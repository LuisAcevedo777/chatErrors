const User = require('../models/user.model')

class userServices{

static async getUser(email){

try{

const user = await User.findOne({where: {email}})
return user
}catch(error){throw error}

}



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