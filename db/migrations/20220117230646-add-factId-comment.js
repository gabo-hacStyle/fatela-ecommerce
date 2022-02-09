'use strict';
const { CommentSchema, COMMENT_TABLE } = require('../models/comment.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(COMMENT_TABLE, 'fact_id', CommentSchema.factId);
  },

//Reverses changes just like with GIT
  down: async (queryInterface) => {
    await queryInterface.removeColumn(COMMENT_TABLE, 'fact_id');
  }
};
