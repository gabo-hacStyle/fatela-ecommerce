const { UserSchema, User } = require('./user.model');
const { ParticipantSchema, Participant } = require('./participant.model');
const { FactSchema, Fact } = require('./fact.model');
const { CategorySchema, Category } = require('./category.model');


//File w the setup of our models

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Participant.init(ParticipantSchema, Participant.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Fact.init(FactSchema, Fact.config(sequelize));


  //For the 'one to one' relation

  Participant.associate(sequelize.models)
  User.associate(sequelize.models)
  Category.associate(sequelize.models)
  Fact.associate(sequelize.models)
}

module.exports = setupModels;
