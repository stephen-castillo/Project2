const User = require('./User');
const Flashcard = require('./Flashcard');
/* const Question = require('./Question');
const Quiz = require('./Quiz'); */
const Result = require('./Result');
const Category = require('./Category');


// In User model

/* User.hasMany(Quiz, {
    foreignKey: 'creatorId',
  }); */
  
  /* User.hasMany(Flashcard, {
    foreignKey: 'creatorId',
  }); */

// In the Quiz model

/* Quiz.hasMany(Question, {
    foreignKey: 'quizId',
    onDelete: 'CASCADE',
  });

Quiz.belongsTo(User, {
    foreignKey: 'creatorId',
  });
   */

// In the Question model

/* Question.belongsTo(Quiz, {
    foreignKey: 'quizId',
  });
  
Question.hasMany(Flashcard, {
    foreignKey: 'questionId',
    onDelete: 'CASCADE',
  }); */
  

// In the Flashcard model

/* Flashcard.belongsTo(Question, {
  foreignKey: 'questionId',
  as: 'relatedQuestion'
  }); */

Flashcard.belongsTo(Category, {
    foreignKey: 'id',
    as: 'category_id'
});
  
/* Flashcard.belongsTo(User, {
    foreignKey: 'creatorId',
  });
 */

// Result model

Result.belongsTo(User, {
     foreignKey: 'userId' 
    });

/* Result.belongsTo(Quiz, {
    foreignKey: 'quizId' 
    }); */

//module.exports = { User, Flashcard, Question, Quiz, Result };
module.exports = { User, Flashcard, Result, Category };