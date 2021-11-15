const Joi = require('joi');

const id = Joi.string().uuid();

const name = Joi.string().alphanum();

const createCommentSchema = Joi.object({
  name: name.required(),
})

const updateCommentSchema = Joi.object({
  name: name.required()
})

const getCommentSchema = Joi.object({
  id: id.required()
})

module.exports = { createCommentSchema, updateCommentSchema, getCommentSchema };
