const router = require('express').Router();
const flashcardRoutes = require('./flashcardRoutes');
const userRoutes = require('./userRoutes'); //depends on name given to routes folder(s) in api folder

router.use('/users', userRoutes);
router.use('/flashcards', flashcardRoutes);
module.exports = router;