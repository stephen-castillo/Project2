const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Flashcard extends Model {}

Flashcard.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'category',
            key: 'id'
        }
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    options: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    explanation: { //optional
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'flashcard',
  }
);

module.exports = Flashcard;