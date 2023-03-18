const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

const db = require('../utils/database')

const User = db.define('users', {

    idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id_user"
    },

    username: {
        type: DataTypes.STRING(30),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: { isEmail: true }
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    firstname: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(30),
        allowNull: false
    },

}, {hooks:{

beforeCreate: async (user)=>{

try{ 
const salt = await bcrypt.genSalt(10)
const paswordHash = await bcrypt.hash(user.password, salt)
user.password= paswordHash}
catch(error){throw error}

}}, timestamps: false},
    
)

module.exports = User