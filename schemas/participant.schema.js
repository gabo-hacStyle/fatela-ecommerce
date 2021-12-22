const Joi = require('joi');

const id = Joi.number();

const name = Joi.string();
const lastName = Joi.string();
const userId = Joi.number();
//For the user
const user = Joi.string().min(4);
const role = Joi.string();
const email = Joi.string().email();
const password = Joi.string().max(20);
const avatar = Joi.string().uri();

const createParticipantSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required(),
    avatar: avatar,
    user: user.required(),
    role: role.required()
  })
})

const updateParticipantSchema = Joi.object({
  name: name,
  lastName: lastName,
  userId: userId
})

const getParticipantSchema = Joi.object({
  id: id.required(),
})

module.exports = { createParticipantSchema, updateParticipantSchema, getParticipantSchema };
