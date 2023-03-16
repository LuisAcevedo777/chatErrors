const {DataTypes} = require('sequelize')

const db = require ('../utils/database')

const ConvOpened= db.define('conversation_opened',{

id: {
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true},

userId: {
type: DataTypes.INTEGER,
allowNull: false,
field: "user_id"},

conversationId: {
type: DataTypes.INTEGER,
allowNull: false,
field: "conversation_id"}

},
    
{timestamps: true})

module.exports = ConvOpened