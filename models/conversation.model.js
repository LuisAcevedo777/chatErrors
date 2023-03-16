const {DataTypes} = require('sequelize')

const db = require ('../utils/database')

const Conversation = db.define('conversations',{

id: {
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true},

title: {
type: DataTypes.STRING(35),
allowNull: true},

type: {
type: DataTypes.BOOLEAN,
allowNull: true,
defaultValue: true
},
userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id"
    }

},
    
{timestamps: true})

module.exports = Conversation