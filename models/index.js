const User = require('./User');
const Flashcard = require('./Flashcard');
const Result = require('./Result');
const Category = require('./Category');

Flashcard.belongsTo(Category, {
    foreignKey: 'id',
    as: 'category_id'
});

Result.belongsTo(User, {
     foreignKey: 'userId' 
    });

module.exports = { User, Flashcard, Result, Category };