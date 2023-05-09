const router = require('express').Router();

const apiRoutes = require('./api');
const templateRoutes = require('./templateRoutes'); //depends on name given to other file inside controllers folder

//router.use('/', homeRoutes);
router.use('/', templateRoutes);
router.use('/api', apiRoutes);
router.use('/*', templateRoutes);

module.exports = router;
