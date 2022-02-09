const { UserSchema, User } = require('./user.model');
const { FactSchema, Fact } = require('./fact.model');
const { CategorySchema, Category } = require('./category.model');
const {CommentSchema, Comment} = require('./comment.model')

//File w the setup of our models

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Fact.init(FactSchema, Fact.config(sequelize));
  Comment.init(CommentSchema, Comment.config(sequelize))


  //For the 'one to one' relation

  User.associate(sequelize.models)
  Category.associate(sequelize.models)
  Fact.associate(sequelize.models)
  Comment.associate(sequelize.models)
}

module.exports = setupModels;
