const Joi = require('joi');

const id = Joi.string().uuid();

const author = Joi.string().max(20);
const image = Joi.string().uri();
const date = Joi.date().greater('1-1-2022');
const content = Joi.string();
const title = Joi.string();
const category = Joi.string();
const description = Joi.string()

const createFactSchema = Joi.object({
  author: author.required(),
  image: image.required(),
  date: date.required(),
  content: content.required(),
  title: title.required(),
  category: category.required(),
  description: description.required()
})

//const updateFactSchema = Joi.object({
//  author: author.required(),
//  image: image.required(),
//  date: date.required(),
//  content: content.required(),
//  title: title.required(),
//  category: category.required()
//
//})

const getFactSchema = Joi.object({
  id: id.required()
})

module.exports = { createFactSchema, /*updateFactSchema*/ getFactSchema };
