const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('../home_routes.js');

router.use('/', homeRoutes);
router.use('/routes', apiRoutes);

module.exports = router;