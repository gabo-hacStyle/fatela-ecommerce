function logErrors(err, req, res, next){
  console.log('Logerrors')
  console.error(err)
  next(err); //Middlewear de tipo error
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

module.exports = { logErrors, errorHandler, boomErrorHandler }
