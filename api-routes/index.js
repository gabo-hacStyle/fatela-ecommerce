const express = require('express')

const factsRouter = require('./facts.api_router')

function apiRouter (app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/facts', factsRouter);
  //router.use('/categories')
  //router.use('/users')
  //router.use('/comments')
}

module.exports = apiRouter;
