const router = require('express').Router();
const flashcardRoutes = require('./flashcardRoutes');
const categoryRoutes = require('./categoryRoutes');
const resultsRoutes = require('./resultsRoutes');
const accountsettingsRoutes = require('./accountsettingsRoutes');
const quizRoutes = require('./quizRoutes');
const userRoutes = require('./userRoutes'); //depends on name given to routes folder(s) in api folder

router.use('/users', userRoutes);
router.use('/flashcards', flashcardRoutes);
router.use('/category', categoryRoutes);
router.use('/results', resultsRoutes);
router.use('/accountsettings', accountsettingsRoutes);
router.use('/quiz', quizRoutes);
module.exports = router;