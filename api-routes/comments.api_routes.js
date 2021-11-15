const express = require('express');
const router = express.Router();
//External stuff: services
const CommentsServices = require('../services/comments.services');
const validatorHandler = require('../middlewears/validator.handler');
const { updateCommentSchema, getCommentSchema, createCommentSchema } = require('../schemas/comment.schema')
const service = new CommentsServices;

//Get comments
router.get('/', async (req, res) => {
  const comments = await service.find();
  res.json(comments)
  console.log(comments.length);
});

//Get single comment
router.get('/:id',
  validatorHandler(getCommentSchema, 'params'),
  async (req, res, next) => {//Middlewear pa despues
    try {
      const { id } = req.params;
      const comment = await service.findOne(id);
      res.json(comment)
    } catch (error) {
      next(error)
    }
})

//Post comment
router.post('/',
  validatorHandler(createCommentSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newComment = await service.create(body);
    res.status(201).json(newComment);
})

//Update
router.patch('/:id',
validatorHandler(updateCommentSchema, 'body'),
async (req, res, next) => {
  try{
      const { id } = req.params;
      const body = req.body;
      const comment = await service.update(id, body);
      res.json(comment);
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
