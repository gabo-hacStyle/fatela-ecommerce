const express = require('express')

const factsRouter = require('./facts.api_router');
const categoriesRouter = require('./categories.api_routes');
const usersRouter = require('./users.api_routes');
const commentsRouter = require('./comments.api_routes');

function apiRouter (app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/facts', factsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/comments', commentsRouter);
}

module.exports = apiRouter;
