const Joi = require('joi');

const id = Joi.string().uuid();

const author = Joi.string().max(20);
const date = Joi.date().greater('1-1-2022');
const isBanned = Joi.boolean();
const content = Joi.string();
const reactions = Joi.array()

const createCommentSchema = Joi.object({
  author: author.required(),
  date: date.required(),
  content: content.required(),
  reactions: reactions.required()
})

const updateCommentSchema = Joi.object({
  content: content.required()
})

const getCommentSchema = Joi.object({
  id: id.required(),
  isBanned: isBanned.required()
})

module.exports = { createCommentSchema, updateCommentSchema, getCommentSchema };
