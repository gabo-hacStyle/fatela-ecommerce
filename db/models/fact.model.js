const { Model, DataTypes, Sequelize } = require('sequelize');
const { CATEGORY_TABLE } = require('./category.model');
const { USER_TABLE } = require('./user.model')

const FACT_TABLE = 'fact';

const FactSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  //Y asi por cada uno...
  author: {
    allowNull: false,
    type: DataTypes.STRING
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING
  },
  content: {
    allowNull: false,
    type: DataTypes.TEXT,
    unique: true
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'https://gabs.com/images/yourface'
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  /*isBlocked {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },*/
  date: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  categoryId: {
    field: 'category_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    defaultValue: 1,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }

}

//Extiende este modelo -> POO
class Fact extends Model {
  //Metodos estáticos
  static associate(models){
    this.belongsTo(models.Category, { as: 'category' });
    this.hasMany(models.Comment, {
      as: 'comments',
      foreignKey: 'factId'
    })
    this.belongsTo(models.User, { as: 'user' });
  }
  static config(sequelize) {
    return{
      sequelize,
      tableName: FACT_TABLE,
      modelName: 'Fact',
      timestamps: false
    }
  }
}

module.exports = { FACT_TABLE , FactSchema, Fact };
