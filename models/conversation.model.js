const {DataTypes} = require('sequelize')

const db = require ('../utils/database')

const Conversation = db.define('conversations',{

idConversation: {
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true,
field: "id_conversation"},

title: {
type: DataTypes.STRING(35),
allowNull: true},

typeConversationId: {
type: DataTypes.INTEGER,
allowNull: true,
field: "type_conversation_id",
unique: false
},

},
    
{timestamps: false})

module.exports = Conversation