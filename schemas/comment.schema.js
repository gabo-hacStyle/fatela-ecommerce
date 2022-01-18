const Joi = require('joi');

const id = Joi.string().uuid();

const author = Joi.string().max(20);
const isBanned = Joi.boolean();
const content = Joi.string();
const userId = Joi.number().integer();
const factId = Joi.number().integer();

//const reactions = Joi.array()

const createCommentSchema = Joi.object({
  author: author.required(),
  content: content.required(),
  userId: userId,
  factId: factId.required()
  //reactions: reactions.required()
})

const updateCommentSchema = Joi.object({
  content: content
})

const getCommentSchema = Joi.object({
  id: id.required(),
  isBanned: isBanned.required()
})

module.exports = { createCommentSchema, updateCommentSchema, getCommentSchema };
