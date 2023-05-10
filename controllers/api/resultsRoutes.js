const router = require('express').Router();
const { Result } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/',  async (req, res) => {
    const results  = await Result.findAll({raw: true});
    //console.log(categories);
    res.render('results',{ results });
});

router.delete('/:resultsId', withAuth, async (req, res) => {
    try {
        const resultsId  = req.params.resultsId;

        const results = await Result.destroy({
            where: { id: resultsId }
        });
  
        res.status(200).json({ results, message: 'Result successfully deleted.' });
        
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;