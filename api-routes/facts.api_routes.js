const express = require('express');
const router = express.Router();

//External files (services)
const FactsServices = require('../services/facts.services');
const validatorHandler = require('../middlewears/validator.handler');
const { createFactSchema, updateFactSchema, getFactSchema } = require('../schemas/fact.schema');


const service = new FactsServices();

//Get Facts
router.get('/', async (req, res) => {
  const facts = await service.find();
  res.json(facts)
  console.log(facts.length);
});

//Get single fact
router.get('/:id',
  validatorHandler(getFactSchema, 'params'),//Params as of req.params
  async (req, res, next) => {//Middlewear
    try {
      const { id } = req.params;
      const fact = await service.findOne(id);
      res.json(fact)
    } catch (error) {
      next(error)
    }

})

//Post fact
router.post('/',
  validatorHandler(createFactSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newFact = await service.create(body);
    res.status(201).json(newFact);
})

//Update
router.patch('/:id',
  validatorHandler(updateFactSchema, 'body'),
  async (req, res, next) => {
    try{
        const { id } = req.params;
        const body = req.body;
        const fact = await service.update(id, body);
        res.json(fact);
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
