const {DataTypes} = require('sequelize')

const db = require ('../utils/database')

const TypeMessage = db.define('types_messages',{

idTypeMessage: {
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true,
field: "id_type_message"},

nameType: {
type: DataTypes.STRING(30),
allowNull: true,
field: "name_type"
},

},
    
    {timestamps: false})

module.exports = TypeMessage