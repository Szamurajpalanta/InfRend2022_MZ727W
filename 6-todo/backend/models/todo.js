'use strict';

const {
  Model
} = require('sequelize');
const { moveSyntheticComments } = require('typescript');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false  
    },
    description: {
      type: DataTypes.STRING
    },
    dueDate: {
      type: DataTypes.DATE,
      validate: {
      isAfter: new Date().toISOString().split('T')[0]
      }
    },
    isDone:  {
      type: DataTypes.BOOLEAN,
      equals: false
    }
    }, {
      sequelize,
      timestamps: false,
      modelName: 'Task'
    });
  return Task;
};