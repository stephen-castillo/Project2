const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Result extends Model {}


Result.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
            
        totalQuestions: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },


    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'result',
    }
);
  
module.exports = Result;
  