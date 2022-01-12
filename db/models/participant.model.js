const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model')

const PARTICIPANT_TABLE = 'participant';

const ParticipantSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  //Y asi por cada uno...
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  userId: {
    field: 'user_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

//Extiende este modelo -> POO
class Participant extends Model {
  //Metodos estáticos
  static associate(models){
    this.belongsTo(models.User, {as: 'user'})
  }
  static config(sequelize) {
    return{
      sequelize,
      tableName: PARTICIPANT_TABLE,
      modelName: 'Participant',
      timestamps: false
    }
  }
}

module.exports = { PARTICIPANT_TABLE, ParticipantSchema, Participant };