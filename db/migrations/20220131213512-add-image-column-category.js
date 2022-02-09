'use strict';
const { CategorySchema, CATEGORY_TABLE } = require('../models/category.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(CATEGORY_TABLE, 'image', CategorySchema.image);
    await queryInterface.addColumn(CATEGORY_TABLE, 'color', CategorySchema.color);

  },

//Reverses changes just like with GIT
  down: async (queryInterface) => {
    await queryInterface.removeColumn(CATEGORY_TABLE, 'image');
    await queryInterface.removeColumn(CATEGORY_TABLE, 'color');

  }
};
