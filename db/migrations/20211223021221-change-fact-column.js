'use strict';

const { FACT_TABLE, FactSchema } = require('../models/fact.model') 

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.changeColumn(FACT_TABLE, 'content', FactSchema.content )
    await queryInterface.changeColumn(FACT_TABLE, 'description', FactSchema.description)

  },

  down: async (queryInterface, Sequelize) => {
    // rollback
  }
};
