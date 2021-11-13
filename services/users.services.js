const faker = require('faker');
const boom = require('@hapi/boom');

class UsersServices{

  constructor(){
    this.users = [];
    this.generate();
  }
  generate() {
    const limit = 10;
    for(let i = 0; i < limit; i++){
      this.users.push({
        id: faker.datatype.uuid(),
        user: faker.internet.userName(),
        mail: faker.internet.email(),
        password: faker.internet.password(),
        avatar: faker.image.avatar(),
        isBanned: faker.datatype.boolean()
      })
    }
  }
  //Post
  async create (data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;
  }

  //Get
  async find (){
    return this.users;
  }

  //Get with ID
  async findOne (id) {
    const user = this.users.find(item => item.id === id)
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
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('User not found')
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    };
    return this.users[index]
  }

  //Delete
  async delete (id) {
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('User not found')
    }
    this.users.splice(index, 1);
    return {
      message: true,
      id
    }
  }
}
module.exports = UsersServices;
