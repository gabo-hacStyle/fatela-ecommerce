'use strict';

const { FactSchema, FACT_TABLE } = require('../models/fact.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(FACT_TABLE, FactSchema);
  },

//Reverses changes just like with GIT
  down: async (queryInterface) => {
    await queryInterface.dropTable(FACT_TABLE);
  }
};
