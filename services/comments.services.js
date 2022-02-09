const faker = require('faker');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize')

class CommentsServices{

  constructor(){
    this.comments = [];
  }
 
  //Post
  async create (data) {
    const newComment = await models.Comment.create(data)
    return newComment;
  }

  //Get
  async find (){
    const rta = await models.Comment.findAll({
      include: ['user', 'fact']
    })
    return rta;
  }

  //Get with ID
  async findOne (id) {
    const comment = await models.Comment.findByPk(id);
    if(!comment){
      throw boom.notFound('Comment not found');
    }
    if(comment.isBlocked){
      throw boom.notAcceptable('This comment has been blocked to appear for its bad content')
    }
    return comment;
  }

  //Update
  async update (id, changes){
    //Already does the verifcation process to check whether the fact exists or not
    const comment = await this.findOne(id);
    const rta = await comment.update(changes);
    return rta;
  }

  //Delete
  async delete (id) {
    const comment = await this.findOne(id);
    await comment.destroy();
    return { id };
  }
}
module.exports = CommentsServices;
