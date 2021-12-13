//Instance of sequelize to detect errors
const { ValidationError } = require('sequelize');
const boom = require('@hapi/boom')

function logErrors(err, req, res, next){
  console.log('Logerrors')
  console.error(err)
  next(err); //Error Middlewear
}
function errorHandler (err, req, res, next){
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
  console.error('Error Handler')
}

function boomErrorHandler (err, req, res, next){
  if(err.isBoom){//Poperty added by boom itself
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}


function ormErrorHandler (err, req, res, next) {
      //Every error that comer from sequelize (db)
  if(err instanceof ValidationError){
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    })
  }
  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler, ormErrorHandler }
