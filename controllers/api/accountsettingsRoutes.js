const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/accountsettings', withAuth, (req, res) => {
    res.render('accountsettings', {
      // Create account settings info here
    });
  });
  
module.exports = router;