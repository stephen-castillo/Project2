const sequelize = require('../config/connection');
const { User, Category } = require('../models');

const userData = require('./userData.json');
const categoryData = require('./categoryData.json');
//const flashcardData = require('./flashcardData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });

  /* await Flashcard.bulkCreate(flashcardData, {
    individualHooks: true,
    returning: true,
  }); */


  process.exit(0);
};

seedDatabase();