'use strict';

const { CommentSchema, COMMENT_TABLE } = require('../models/comment.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(COMMENT_TABLE, CommentSchema);
  },

//Reverses changes just like with GIT
  down: async (queryInterface) => {
    await queryInterface.dropTable(COMMENT_TABLE);
  }
};
