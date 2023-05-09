const router = require('express').Router();
const { Category } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, async (req, res) => {
    const categories  = await Category.findAll({raw: true});
    //console.log(categories);
    res.render('category',{ categories });
});

module.exports = router;