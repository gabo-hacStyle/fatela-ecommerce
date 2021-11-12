const Joi = require('joi');

const id = Joi.string().id();

const name = Joi.string.name().min(3).max(15);

const createCategorySchema = Joi.object({
  name: name.required(),
})

const updateCatrgorySchema = Joi.object({
  name: name
})

const getCategorySchema = Joi.object({
  id: id.required()
})

module.exports = { createCategorySchema, updateCatrgorySchema, getCategorySchema };
