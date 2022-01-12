const boom = require('@hapi/boom');
//const getConnection = require('../libs/postgres')

const { models } = require('../libs/sequelize');

class ParticipantsServices{

  constructor(){
    this.participants = [];
  }
  //Post
  async create (data) {
    const newParticipant = await models.Participant.create(data, {
      include: ['user']
    })
    return newParticipant;
  }

  //Get
  async find (){
    const rta = await models.Participant.findAll({
    //Associations
      include: ['user']
    });
    return rta;
  }

  //Get with ID
  async findOne (id) {
    const participant = await models.Participant.findByPk(id)
    if(!participant){
      throw boom.notFound('Participant not found')
    }
    if(participant.isBanned){
      throw boom.notAcceptable('Participant has been banned for bringing bad content into the forum')
    }
    return participant;
  }

  //Update
  async update (id, changes){
    const participant =  await this.findOne(id);
    const rta = await participant.update(changes);
    return rta;
  }

  //Delete
  async delete (id) {
    const participant =  await this.findOne(id);
    await participant.destroy();
    return { id };
  }
}
module.exports = ParticipantsServices;
