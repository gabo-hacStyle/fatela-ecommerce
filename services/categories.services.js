const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class CategoriesServices{

  constructor(){
    this.categories = [];
  }

  //Post
  async create (data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  //Get
  async find (){
    const rta = await models.Category.findAll();
    return rta;
  }

  //Get with ID
  async findOne (id) {
    const category = await models.Category.findByPk(id, {
      include: ['facts']
    });
    if(!category){
      throw boom.notFound('Categoria no encontrada');
    }
    return category;
  }

  //Update
  async update (id, changes){
    const category = await this.findOne(id);
    const rta = await category.update(changes);
    return rta;
  }

  //Delete
  async delete (id) {
    const category = await this.findOne(id);
    await category.destroy();
    return { id };
  }
}
module.exports = CategoriesServices;
