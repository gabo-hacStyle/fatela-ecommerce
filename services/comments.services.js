const faker = require('faker');

class CommentsServices{

  constructor(){
    this.comments = [];
    this.generate();
  }
  generate() {
    const limit = 10;
    for(let i = 0; i < limit; i++){
      this.comments.push({
        id: faker.datatype.uuid(),
        author: faker.name.findName(),
        content: faker.lorem.sentences(),
        likes: faker.datatype.number(),
        reactions: [{
          image: faker.image.imageUrl(),
          number: faker.datatype.number()
        },
        {
          image: faker.image.imageUrl(),
          number: faker.datatype.number()
        }]
      })
    }
  }
  //Post
  async create (data) {
    const newComment = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.comments.push(newComment);
    return newComment;
  }

  //Get
  async find (){
    return this.comments;
  }

  //Get with ID
  async findOne (id) {
    return this.comments.find(item => item.id === id)
  }

  //Update
  async update (id, changes){
    const index = this.comments.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('Comment not found')
    }
    const comment = this.comments[index];
    this.comments[index] = {
      ...comment,
      ...changes
    };
    return this.comments[index]
  }

  //Delete
  async delete (id) {
    const index = this.comments.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('Comment not found')
    }
    this.comments.splice(index, 1);
    return {
      message: true,
      id
    }
  }
}
module.exports = CommentsServices;
