const router = require('express').Router();
const { Category, User, Flashcard, Result } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', async (req, res) => {
    console.log('made it to quiz')
    try {
        const flashcards = await Flashcard.findAll({ where: { categoryId: req.params.id }, raw:true });
        //console.log(userData);
        if (!flashcards) {
            res.status(400)
                //.json({ message: 'Incorrect email or password, please try again' });
                .json({ message: 'Unable to find quiz' });
            return;
        }
        console.log(flashcards);
        loggedIn = req.session.logged_in;
        res.render('quiz',{ flashcards, loggedIn });
        
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;