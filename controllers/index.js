const router = require('express').Router();

const apiRoutes = require('./api');
//const homeRoutes = require('./homeRoutes'); //depends on name given to other file inside controllers folder

//router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
