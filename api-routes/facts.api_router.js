const express = require('express');
const router = express.Router();

//External files (services)
const FactsServices = require('../services/facts.services');

const service = new FactsServices();

//Get Facts
router.get('/', async (req, res) => {
  const facts = await service.find();
  res.json(facts)
});

//Get single fact
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const fact = await service.findOne(id);
  res.json(fact)
})

//Post fact
router.post('/', async (req, res) => {
  const body = req.body;
  const newFact = await service.create(body);
  res.status(201).json(newFact);
})

//Update
router.patch('/:id', async (req, res) => {
  try{
      const { id } = req.params;
      const body = req.body;
      const fact = await service.update(id, body);
      res.json(fact);
    } catch (err){
    res.status(404).json({
      message: err.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const answer = await service.delete(id);
  res.json(answer)
})

module.exports = router;
