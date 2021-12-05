const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  }
  //Y asi por cada uno...
}

//Extiende este modelo -> POO
class User extends Model {
  //Metodos estáticos
  static associate(){
    //associate
  }
  static config(sequelize) {
    return{
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User };
