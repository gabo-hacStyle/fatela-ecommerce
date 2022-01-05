'use strict';

const { CategorySchema, CATEGORY_TABLE } = require('../models/category.model')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
  },

  //Reverses changes just like with GIT
  down: async (queryInterface) => {
    await queryInterface.dropTable(CATEGORY_TABLE)
  }
};
