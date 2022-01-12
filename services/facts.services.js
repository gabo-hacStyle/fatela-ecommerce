const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize')

class FactsServices{

  constructor(){
    this.facts = [];
  }

  //Post
  async create (data) {
    const newFact = await models.Fact.create(data);
    return newFact;
  }

  //Get
  async find (){
    const rta = await models.Fact.findAll({
      include: ['category']
    });
    return rta;
  }

  //Get with ID
  async findOne (id) {
    const fact = await models.Fact.findByPk(id);
    if(!fact){
      throw boom.notFound('Fact not found');
    }
    if(fact.isBlocked){
      throw boom.notAcceptable('This fact has been blocked to appear for its bad content')
    }
    return fact;
  }

  //Update
  async update (id, changes){
    //Already does the verifcation process to check whether the fact exists or not
    const fact = await this.findOne(id);
    const rta = await fact.update(changes);
    return rta ;
  }

  //Delete
  async delete (id) {
    const fact = await this.findOne(id);
    await fact.destroy();
    return { id };
  }
}

module.exports = FactsServices;
