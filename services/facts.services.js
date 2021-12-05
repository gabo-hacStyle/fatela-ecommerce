const faker = require('faker');
const boom = require('@hapi/boom');

const sequelize = require('../libs/sequelize');


class FactsServices{

  constructor(){
    this.facts = [];
    this.generate();
  }

  generate(){
    const limit = 25;
    for(let i = 0; i < limit; i++){
      this.facts.push({
        id: faker.datatype.uuid(),
        author: faker.name.findName(),
        category: faker.music.genre(),
        title: faker.name.title(),
        content: faker.lorem.paragraphs(),
        image: faker.image.imageUrl(),
        description: faker.commerce.productDescription(),
        isBlocked: faker.datatype.boolean(),
        date: faker.datatype.datetime()
      })
    }
  }
  //Post
  async create (data) {
    const newFact = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.facts.push(newFact);
    return newFact;
  }

  //Get
  async find (){
    const query = 'SELECT * FROM tasks';
    const [data] = await sequelize.query(query)
    return data;
  }

  //Get with ID
  async findOne (id) {
    const fact = this.facts.find(item => item.id === id);
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
    const index = this.facts.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('Fact not found')
    }
    const fact = this.facts[index];
    this.facts[index] = {
      ...fact,
      ...changes
    };
    return this.facts[index]
  }

  //Delete
  async delete (id) {
    const index = this.facts.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('Fact not found')
    }
    this.facts.splice(index, 1);
    return {
      message: true,
      id
    }
  }

}

module.exports = FactsServices;
