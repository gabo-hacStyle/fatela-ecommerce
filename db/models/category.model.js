const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORY_TABLE = 'category';

const CategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  //Y asi por cada uno...
  name: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  image: {
    allowNull: false,
    defaultValue: 'https://gabs.com/img/enwqef2389823',
    type: DataTypes.STRING
  },
  color: {
    allowNull: false,
    defaultValue: '#dfd',
    type: DataTypes.STRING
  }

}

//Extiende este modelo -> POO
class Category extends Model {
  //Metodos estáticos
  static associate(models){
    this.hasMany(models.Fact,{
      as: 'facts',
      foreignKey: 'categoryId'
    })
  }
  static config(sequelize) {
    return{
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false
    }
  }
}

module.exports = { CATEGORY_TABLE, CategorySchema, Category };
