const boom = require('@hapi/boom');
//const getConnection = require('../libs/postgres')

const { models } = require('../libs/sequelize');

class UsersServices{

  constructor(){
    this.users = [];
  }

  //Post
  async create (data) {
    const newUser = await models.User.create(data)
    return newUser;
  }

  //Get
  async find (){
    const rta = await models.User.findAll({
      include: ['participant']
    });
    return rta;
  }

  //Get with ID
  async findOne (id) {
    const user = await models.User.findByPk(id)
    if(!user){
      throw boom.notFound('User not found')
    }
    if(user.isBanned){
      throw boom.notAcceptable('User has been banned for bringing bad content into the forum')
    }
    return user;
  }

  //Update
  async update (id, changes){
    const user =  await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  //Delete
  async delete (id) {
    const user =  await this.findOne(id);
    await user.destroy();
    return { id };
  }
}
module.exports = UsersServices;
