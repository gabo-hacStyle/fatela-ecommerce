'use strict';

const { PARTICIPANT_TABLE, ParticipantSchema} = require('../models/participant.model')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(PARTICIPANT_TABLE, ParticipantSchema)
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(PARTICIPANT_TABLE);
  }
};
