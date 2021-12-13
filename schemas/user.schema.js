const Joi = require('joi');

const id = Joi.number();

const user = Joi.string().min(4);
//const isBanned = Joi.boolean();
const email = Joi.string().email();
const avatar = Joi.string().uri();
const password = Joi.string().min(7).max(19);
const createdAt = Joi.date();

const createUserSchema = Joi.object({
  user: user.required(),
  email: email.required(),
  password: password.required(),
  avatar: avatar
})

const updateUserSchema = Joi.object({
  avatar: avatar,
  email: email,
  user: user
})

const getUserSchema = Joi.object({
  id: id.required(),
})

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
