const Joi = require('joi');

const id = Joi.string().uuid();

const name = Joi.string().alphanum();

const createUserSchema = Joi.object({
  name: name.required(),
})

const updateUserSchema = Joi.object({
  name: name.required()
})

const getUserSchema = Joi.object({
  id: id.required()
})

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
