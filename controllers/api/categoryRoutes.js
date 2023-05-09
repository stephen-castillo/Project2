const router = require('express').Router();
const { Category } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, async (req, res) => {
    let categories  = await Category.findAll({raw: true});
    categories = JSON.stringify(categories);
    console.log(categories);
    res.render('category',{ data: categories});
});

module.exports = router;