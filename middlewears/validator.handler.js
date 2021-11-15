const boom = require('@hapi/boom')

//Dinamyc middlewear
function validatorHandler(schema, property){
  return (req, res, next) => {
    const data = req[property];
    /**Dynamic:
     * req[property]:
     * req.params -> get
     * req.body -> post, update
     * req.query -> get
     */
    const { error } = schema.validate(data, { abortEarly : false })
    if(error){
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
