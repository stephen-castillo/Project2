const router = require('express').Router();
const flashcardRoutes = require('./flashcardRoutes');
const categoryRoutes = require('./categoryRoutes');
const resultsRoutes = require('./resultsRoutes');
const userRoutes = require('./userRoutes'); //depends on name given to routes folder(s) in api folder

router.use('/users', userRoutes);
router.use('/flashcards', flashcardRoutes);
router.use('/category', categoryRoutes);
router.use('/results', resultsRoutes);
module.exports = router;