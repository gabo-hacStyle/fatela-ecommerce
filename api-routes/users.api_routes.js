const express = require('express');
const router = express.Router();
//External stuff: services
const UsersServices = require('../services/users.services');
const service = new UsersServices;

//Get users
router.get('/', async (req, res) => {
  const users = await service.find();
  res.json(users)
  console.log(users.length);
});

//Get single user
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await service.findOne(id);
    res.json(user)
  } catch (error) {
    next(error)
  }
})

//Post user
router.post('/', async (req, res) => {
  const body = req.body;
  const newUser = await service.create(body);
  res.status(201).json(newUser);
})

//Update user
router.patch('/:id', async (req, res, next) => {
  try{
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body);
      res.json(user);
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
