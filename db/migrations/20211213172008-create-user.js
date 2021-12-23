'use strict';

const { UserSchema, USER_TABLE } = require('../models/user.model')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

//Reverses changes just like with GIT
  down: async (queryInterface) => {
    await queryInterface.drop(USER_TABLE)
  }
};
