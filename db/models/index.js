const { UserSchema, User } = require('./user.model');
const { ParticipantSchema, Participant } = require('./participant.model');

//File w the setup of our models

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Participant.init(ParticipantSchema, Participant.config(sequelize));


  //For the 'one to one' relation
  Participant.associate(sequelize.models)
  User.associate(sequelize.models)
}

module.exports = setupModels;
