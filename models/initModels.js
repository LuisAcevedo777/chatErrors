const User = require('./user.model')
const Conversation = require('./conversation.model')
const Message = require('./message.model')
const TypeConversation = require('./typeConversation.model')
const TypeMessage = require('./typeMessage.model')
const UserConversation = require('./userConversation.model')
const messageServices = require('../services/message.service')

const initModels = ()=>{


User.belongsToMany(Conversation, { through: UserConversation, foreignKey: 'user_id', otherKey: 'conversation_id'})
Conversation.belongsToMany(User, { through: UserConversation, foreignKey: 'conversation_id',  otherKey: 'user_id'})

User.hasMany(Message, {foreignKey: 'id_user_message'})
Message.belongsTo(User, {foreignKey: 'id_user_message'})

Conversation.hasMany(Message, {foreignKey: 'id_message_conversation'})
Message.belongsTo(Conversation, {foreignKey: 'id_message_conversation'})

TypeConversation.hasMany(Conversation, {foreignKey: 'type_conversation_id'})
Conversation.belongsTo(TypeConversation, {foreignKey: 'type_conversation_id'})

TypeMessage.hasMany(Message, {foreignKey: 'type_id_message'})
Message.belongsTo(TypeMessage, {foreignKey: 'type_id_message'})

}

module.exports = initModels