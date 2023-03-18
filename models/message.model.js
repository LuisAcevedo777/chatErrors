const {DataTypes} = require('sequelize')

const db = require ('../utils/database')

const Message = db.define('messages',{

idMessage: {
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true,
field: "id_message"},

content: {
type: DataTypes.TEXT,
allowNull: true},

  typeIdMessage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "type_id_message"
        },

idUserMessage: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "id_user_message"
    },
    idMessageConversation: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "id_message_conversation"
        },
},
    
    {timestamps: false})

module.exports = Message