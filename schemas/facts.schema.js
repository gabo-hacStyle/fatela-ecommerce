const Joi = require('joi');

const id = Joi.string().uuid();

const name = Joi.string().alphanum();

const createFactSchema = Joi.object({
  name: name.required(),
})

const updateFactSchema = Joi.object({
  name: name.required()
})

const getFactSchema = Joi.object({
  id: id.required()
})

module.exports = { createFactSchema, updateFactSchema, getFactSchema };
