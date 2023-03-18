const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const UserConversation = db.define('users_conversations', {

    idUserConversation: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id_user_conversation"
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
        
    },

    conversationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "conversation_id",
     
    },
      },
    
{timestamps:false})

module.exports = UserConversation