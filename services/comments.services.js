const faker = require('faker');
const boom = require('@hapi/boom');

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
        }],
        isBanned: faker.datatype.boolean()
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
    const comment = this.comments.find(item => item.id === id)
    if(!comment){
      throw boom.notFound('Comment not found')
    }
    if(comment.isBanned){
      throw boom.notAcceptable('This comment has been banned beacuse it has bad content')
    }
    return comment;
  }

  //Update
  async update (id, changes){
    const index = this.comments.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('Comment not found')
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
