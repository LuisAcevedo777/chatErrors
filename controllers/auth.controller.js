const userServices = require('../services/user.service')
const bcrypt = require('bcrypt')


const userLogin= async (req,res, next)=>{

try{

const{email, password} = req.body
const user = await userServices.getUser(email)
if(!user){
    return next({status: 400, message: 'invalid email', error: 'user not found'})}

    const isValid = await bcrypt.compare(password, user.password)
    if(!isValid){return next({status: 400, message: 'the password doesn`t match whit email', error: 'invalid password'})}
    res.json({

email: user.email,
username: user.username,
firsname: user.firstname,
lastname: user.lastname


    })} catch(error){next(error)}
}
    module.exports={userLogin}