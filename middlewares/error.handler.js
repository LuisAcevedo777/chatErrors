const {

ValidationError,
DatabaseError,
BaseError,
ConnectionError,
ConnectionAcquireTimeoutError,
ConnectionRefusedError,
ConnectionTimedOutError,
InvalidConnectionError,

} = require('sequelize')

const logError =  (error, req, res, next)=>{

    console.log(error)
next(error)


}

const errorHandler =  (error, req, res, next)=>{

    let{status} = error
    return res.status( status || 500).json({

        message: error.message,
        errorName: error.name,
    })}

module.exports={logError, errorHandler}