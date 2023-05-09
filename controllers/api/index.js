const router = require('express').Router();
const flashcardRoutes = require('./flashcardRoutes');
const categoryRoutes = require('./categoryRoutes');
const userRoutes = require('./userRoutes'); //depends on name given to routes folder(s) in api folder

router.use('/users', userRoutes);
router.use('/flashcards', flashcardRoutes);
router.use('/category', categoryRoutes);
module.exports = router;