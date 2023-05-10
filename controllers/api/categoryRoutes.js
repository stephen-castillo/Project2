const router = require('express').Router();
const { Category } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, async (req, res) => {
    const categories  = await Category.findAll({raw: true});
    //console.log(categories);
    loggedIn = req.session.logged_in;
    res.render('category',{ categories, loggedIn });
});

router.post('/', withAuth, async (req, res) => {
    try {
        const name = req.body.name;
    
        const category = await Category.create(
            { 
                name: name, 
            });
  
        res.status(200).json({ category, message: 'Category created successfully.' });
        
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:categoryId', withAuth, async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const name = req.body.name;
    
        const category = await Category.update({ name }, {
            where: { id: categoryId }
        });
  
        res.status(200).json({ category, message: 'Category updated successfully.' });
        
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:categoryId', withAuth, async (req, res) => {
    try {
        const categoryId  = req.params.categoryId;

        const category = await Category.destroy({
            where: { id: categoryId }
        });
  
        res.status(200).json({ category, message: 'Category successfully deleted.' });
        
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;