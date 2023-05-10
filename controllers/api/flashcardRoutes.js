const router = require('express').Router();
const { Flashcard } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, async (req, res) => {
    const flashcards  = await Flashcard.findAll({raw: true});
    console.log(flashcards);
    loggedIn = req.session.logged_in;
    //res.status(200).json({ flashcards, loggedIn });
    res.render('flashcardpage',{ flashcards, loggedIn });
});

router.post('/', withAuth, async (req, res) => {
    try {
        const { title, categoryId, question, options, answer } = req.body;
    
        const flashcard = await Flashcard.create(
            { 
                title: title, 
                categoryId: categoryId, 
                question: question, 
                options: options, 
                answer: answer
            });
  
        res.status(200).json({ flashcard, message: 'Flashcard created successfully.' });
        
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:flashcardId', withAuth, async (req, res) => {
    try {
        const { flashcardId } = req.params;
        const { title, categoryId, question, options, answer } = req.body;
    
        const flashcard = await Flashcard.update({ title, categoryId, question, options, answer }, {
            where: { id: flashcardId }
        });
  
        res.status(200).json({ flashcard, message: 'Flashcard updated successfully.' });
        
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:flashcardId', withAuth, async (req, res) => {
    try {
        const flashcardId  = req.params.flashcardId;

        const flashcard = await Flashcard.destroy({
            where: { id: flashcardId }
        });
  
        res.status(200).json({ flashcard, message: 'Flashcard successfully deleted.' });
        
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;