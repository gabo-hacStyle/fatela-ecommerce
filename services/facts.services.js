const faker = require('faker');

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
        author: [faker.name.firstName(), faker.name.lastName()],
        category: faker.music.genre(),
        title: faker.name.title(),
        content: faker.lorem.paragraphs(),
        image: faker.image.imageUrl(),
        description: faker.commerce.productDescription()
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
    return newProduct;
  }

  //Get
  async find (){
    return this.facts;
  }

  //Get with ID
  async findOne (id) {
    return this.facts.find(item => item.id === id)
  }

  //Update
  async update (id, changes){
    const index = this.products.findIndex();
    if(index === -1){
      throw new Error('Product not found')
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
    const index = this.products.findIndex();
    if(index === -1){
      throw new Error('Product not found')
    }
    this.facts.splice(index, 1);
    return {
      message: true,
      id
    }
  }
}

module.exports = FactsServices;
