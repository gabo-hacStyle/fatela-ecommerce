const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model');
const { FACT_TABLE } = require('./fact.model');

const COMMENT_TABLE = 'comment';

const CommentSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  //Y asi por cada uno...
  author: {
    allowNull: false,
    unique: false,
    type: DataTypes.STRING
  },
  content: {
      allowNull: false,
      unique: false,
      type: DataTypes.STRING
  },
  date: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  //Reactions {...}
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    defaultValue: undefined,
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  factId: {
    field: 'fact_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: FACT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

//Extiende este modelo -> POO
class Comment extends Model {
  //Metodos estáticos
  static associate(models){
    this.belongsTo(models.User, {as: 'user'})
    this.belongsTo(models.Fact, {as: 'fact'})
  }
  static config(sequelize) {
    return{
      sequelize,
      tableName: COMMENT_TABLE,
      modelName: 'Comment',
      timestamps: false
    }
  }
}

module.exports = { COMMENT_TABLE, CommentSchema, Comment };
