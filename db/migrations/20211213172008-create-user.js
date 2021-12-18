'use strict';

const { UserSchema, USER_TABLE } = require('../models/user.model')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  //Opcion para revertir cambio como en git
  down: async (queryInterface) => {
    await queryInterface.drop(USER_TABLE)
  }
};
