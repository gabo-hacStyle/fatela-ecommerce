const faker = require('faker');

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
        status: faker.datatype.boolean()
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
    return this.users.find(item => item.id === id)
  }

  //Update
  async update (id, changes){
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('User not found')
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
