const Joi = require('joi');

const id = Joi.number().integer();

const author = Joi.string().max(20);
const image = Joi.string().uri();
const content = Joi.string();
const title = Joi.string();
const description = Joi.string();
const categoryId = Joi.number().integer();

const createFactSchema = Joi.object({
  author: author.required(),
  content: content.required(),
  title: title.required(),
  description: description.required(),
  image: image,
  categoryId: categoryId.required()
})

const updateFactSchema = Joi.object({
  author: author,
  image: image,
  content: content,
  title: title,
  description: description,
  categoryId: categoryId
})

const getFactSchema = Joi.object({
  id: id.required()
})

module.exports = { createFactSchema, updateFactSchema, getFactSchema };
