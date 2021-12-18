const express = require('express');
const router = express.Router();
//External stuff: services
const validatorHandler = require('../middlewears/validator.handler');
const { createParticipantSchema, updateParticipantSchema, getParticipantSchema } = require('../schemas/participant.schema');
const ParticipantsServices = require('../services/participants.services');
const service = new ParticipantsServices;


//Get participants
router.get('/', async (req, res) => {
  const participants = await service.find();
  res.json(participants)
  console.log(participants.length);
});

//Get single participant
router.get('/:id',
  validatorHandler(getParticipantSchema, 'params'),//Params as of req.params

  async (req, res, next) => {
    try {
      const { id } = req.params;
      const participant = await service.findOne(id);
      res.json(participant)
    } catch (error) {
      next(error)
    }
})

//Post participant
router.post('/',
validatorHandler(createParticipantSchema, 'body'),
async (req, res, next) => {
  try{
  const body = req.body;
  const newParticipant = await service.create(body);
  res.status(201).json(newParticipant);
  } catch (error){
    next(error)
  }
})

//Update participant
router.patch('/:id',
 validatorHandler(updateParticipantSchema, 'body'),
  async (req, res, next) => {
    try{
        const { id } = req.params;
        const body = req.body;
        const participant = await service.update(id, body);
        res.json(participant);
      } catch (error){
        next(error)
    }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const answer = await service.delete(id);
  res.json(answer)
})

module.exports = router;
