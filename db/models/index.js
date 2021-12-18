const { UserSchema, User } = require('./user.model');
const { ParticipantSchema, Participant } = require('./participant.model')

//File w the setup of our models

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Participant.init(ParticipantSchema, Participant.config(sequelize));



  Participant.associate(sequelize.models)
}

module.exports = setupModels;
