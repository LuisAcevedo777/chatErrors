const {DataTypes} = require('sequelize')

const db = require ('../utils/database')

const Message = db.define('messages',{

id: {
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true},

content: {
type: DataTypes.TEXT,
allowNull: true},

conversationIdMessage: {
type: DataTypes.INTEGER,
allowNull: false,
field: "conversation_id_message"
},
userIdMessage: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id_message"
    }},
    
    {timestamps: true})

module.exports = Message