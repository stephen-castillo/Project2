// Scripts to register handlebars partials

const Handlebars = require('handlebars');
const fs = require('fs');

// Navbar

const navbar = fs.readFileSync(__dirname + '/../views/partials/navbar.handlebars', 'utf8');
Handlebars.registerPartial('navbar', navbar);

// Flashcard page 

const flashcardpage = fs.readFileSync(__dirname + '/../views/partials/flashcardpage.handlebars', 'utf8');
Handlebars.registerPartial('flashcards', flashcardpage);

// Quiz page

const quizpage = fs.readFileSync(__dirname + '/../views/partials/quizpage.handlebars', 'utf8');
Handlebars.registerPartial('quiz', quizpage);

// Category page

const categorypage = fs.readFileSync(__dirname + '/../views/partials/category.handlebars', 'utf8');
Handlebars.registerPartial('category', categorypage);
