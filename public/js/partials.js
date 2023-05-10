// Scripts to register navbar handlebars partial

const Handlebars = require ('handlebars');
const fs = require ('fs');

// Navbar

const navbar = fs.readFileSync (__dirname + '/../views/partials/navbar.handlebars', 'utf8');
Handlebars.registerPartial ('navbar', navbar);

