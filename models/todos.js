'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todos.init({
    userId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    done: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Todos',
  });
  return Todos;
};