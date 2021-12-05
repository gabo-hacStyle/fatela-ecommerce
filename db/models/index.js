const { UserSchema, User } = require('./user.model');

//File w the setup of our models

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
}

module.exports = setupModels;
