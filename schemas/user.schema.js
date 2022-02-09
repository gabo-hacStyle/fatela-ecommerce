const Joi = require('joi');

const id = Joi.number();

const user = Joi.string().min(4);
const role = Joi.string();
const email = Joi.string().email();
const avatar = Joi.string().uri();
const password = Joi.string().min(7).max(19);

const createUserSchema = Joi.object({
  user: user.required(),
  email: email.required(),
  password: password.required(),
  avatar: avatar,
  //role: role.required()
})

const updateUserSchema = Joi.object({
  user: user,
  email: email,
  role: role,
  avatar: avatar,
  password: password,
  avatar: avatar
})

const getUserSchema = Joi.object({
  id: id.required(),
})

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
