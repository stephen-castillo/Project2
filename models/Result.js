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
        
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        
        quizId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'quiz',
                key: 'id'
            }
        },
        
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
            
        totalQuestions: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        // These are optional, would be cool to have them
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
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
  