'use strict';
const { FactSchema, FACT_TABLE } = require('../models/fact.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(FACT_TABLE, 'user_id', FactSchema.userId);
  },

//Reverses changes just like with GIT
  down: async (queryInterface) => {
    await queryInterface.removeColumn(FACT_TABLE, 'user_id');
  }
};
