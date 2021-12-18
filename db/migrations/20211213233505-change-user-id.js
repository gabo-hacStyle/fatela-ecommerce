'use strict';
const { PARTICIPANT_TABLE } = require('../models/participant.model')

module.exports = {
  up: async (queryInterface) => {
    //Al hacer un cambio como por ejemplo de unique true, solo emviamos esto
    await queryInterface.changeColumn(PARTICIPANT_TABLE, 'user_id');
  },

  down: async (queryInterface) => {
   // await  queryInterface.dropTable(CUSTOMER_TABLE)
  }
};
