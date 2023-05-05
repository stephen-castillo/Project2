const router = require('express').Router();
const userRoutes = require('./userRoutes'); //depends on name given to routes folder(s) in api folder

router.use('/users', userRoutes);

module.exports = router;