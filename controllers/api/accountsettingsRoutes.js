const router = require('express').Router();

router.get('/accountsettings', withAuth, (req, res) => {
    res.render('accountsettings', {
      // Create account settings info here
    });
  });
  
module.exports = router;