const Joi = require('joi');

const id = Joi.number();

const name = Joi.string();
const lastName = Joi.string();
const userId = Joi.number();

const createParticipantSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  userId: userId.required()
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
