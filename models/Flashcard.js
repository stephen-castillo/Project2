const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const lo = require('lodash');

class Flashcard extends Model {}

Flashcard.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true,
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
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'flashcard',
    hooks: {
      afterFind: (flashcards) => {
        flashcards.forEach((flashcard) => {
          const options = flashcard.options.split(',');
          const shuffledOptions = lo.shuffle([...options]);
          flashcard.shuffledOptions = shuffledOptions;
        });
      }
    }
  }
);

module.exports = Flashcard;