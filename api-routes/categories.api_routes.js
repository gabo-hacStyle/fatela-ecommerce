const express = require('express');
const router = express.Router();
//External stuff: services
const CategoriesServices = require('../services/categories.services');

const service = new CategoriesServices;

//Get categories
router.get('/', async (req, res) => {
  const categories = await service.find();
  res.json(categories)
  console.log(categories.length);
});

//Get single category
router.get('/:id', async (req, res, next ) => {//Middlewear
  try {
    const { id } = req.params;
    const category = await service.findOne(id);
    res.json(category)
  } catch (error) {
    next(error)
  }
})

//Post category
router.post('/', async (req, res) => {
  const body = req.body;
  const newCategory = await service.create(body);
  res.status(201).json(newCategory);
})

//Update
router.patch('/:id', async (req, res) => {
  try{
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
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
