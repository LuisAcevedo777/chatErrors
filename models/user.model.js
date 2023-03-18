const { DataTypes } = require('sequelize')

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
        type: DataTypes.STRING(50),
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

},
    
{timestamps:false})

module.exports = User