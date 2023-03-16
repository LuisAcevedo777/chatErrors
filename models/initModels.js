const User = require('./user.model')
const Conversation = require('./conversation.model')
const ConvOpened = require('./convOpened.model')
const Message = require('./message.model')

const initModels = ()=>{

User.hasMany(ConvOpened, {foreignKey: 'user_id'})
ConvOpened.belongsTo(User, {foreignKey: 'user_id'})
User.hasMany(Message, {foreignKey: 'user_id_message'})
Message.belongsTo(User, {foreignKey: 'user_id_message'})
Conversation.hasMany(ConvOpened, {foreignKey: 'conversation_id'})
ConvOpened.belongsTo(Conversation, {foreignKey: 'conversation_id'})
Conversation.hasMany(Message, {foreignKey: 'conversation_id_message'})
Message.belongsTo(Conversation, {foreignKey: 'conversation_id_message'})

}

module.exports = initModels