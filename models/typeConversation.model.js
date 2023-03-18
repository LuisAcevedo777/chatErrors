const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const TypeConversation = db.define('types_conversations', {

    idTypeConversation: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id_type_conversation"
    },

    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    },
    
{timestamps:false})

module.exports = TypeConversation