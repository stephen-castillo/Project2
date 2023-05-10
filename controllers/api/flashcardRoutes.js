const express = require('express');
const router = require('express').Router();
const { Flashcard } = require('../../models');
const withAuth = require('../../utils/auth');
const bodyParser = require('body-parser');
const app = express();
const lo = require('lodash');

router.get('/', withAuth, async (req, res) => {
    const flashcards  = await Flashcard.findAll({raw: true});
    console.log(flashcards);
    loggedIn = req.session.logged_in;
    //res.status(200).json({ flashcards, loggedIn });
    res.render('flashcardpage',{ flashcards, loggedIn });
});

/*router.post('/', withAuth, async (req, res) => {
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
*/ 

// configure middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/*
// route handler
app.post('/flashcards', async (req, res) => {
    console.log('Route handler function called');
  try {
    const { title } = req.body;
    const newTitle = await Title.create({ name: title });
    console.log(newTitle);

    const category = req.body.category;

    // create the category if it doesn't exist
    const existingCategory = await Category.findOne({ name: category });
    let categoryId;
    if (existingCategory) {
      categoryId = existingCategory.id;
    } else {
      const newCategory = await Category.create({ name: category });
      categoryId = newCategory.id;
    }
    console.log(newCategory);

    // create the flashcards
    const questions = req.body.questions.map(q => {
      const { question, correctAnswer, incorrectAnswers } = q;
      const options = [correctAnswer, ...incorrectAnswers];
      const answer = lo.shuffle(options)[0];
      return { question, options, answer };
    });

    const flashcards = await Flashcard.bulkCreate(
      questions.map(q => ({ title: newTitle.id, categoryId, ...q }))
    );
    console.log(flashcards);

    res.status(200).json({ flashcards, message: 'Flashcards created successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}); */

app.post('/flashcards', async (req, res) => {
    console.log("I am here");
   try {
      const { title, category, questions } = req.body;
      const newTitle = await Title.create({ name: title });
      const existingCategory = await Category.findOne({ name: category });
      let categoryId;
      if (existingCategory) {
        categoryId = existingCategory.id;
      } else {
        const newCategory = await Category.create({ name: category });
        categoryId = newCategory.id;
      }
  
      const quizCards = questions.map(question => {
        const { question: questionText, correctAnswer, incorrectAnswers } = question;
        const options = [correctAnswer, ...incorrectAnswers];
        const shuffledOptions = _.shuffle(options);
  
        return {
          question: questionText,
          options: shuffledOptions,
          correctAnswer: correctAnswer
        };
      });
  
      let currentCardIndex = 0;
      const currentCard = quizCards[currentCardIndex];
  
      // Function to display a quiz card
      function displayCard(card) {
        // Retrieve the quiz card elements from the DOM
        const questionElement = document.getElementById('question');
        const optionElements = document.querySelectorAll('.option');
  
        // Set the text of the question element
        questionElement.textContent = card.question;
  
        // Set the text of the option elements and attach event listeners
        optionElements.forEach((element, index) => {
          element.textContent = card.options[index];
          element.addEventListener('click', event => {
            // If the clicked option is the correct answer, display the next card
            if (element.textContent === card.correctAnswer) {
              currentCardIndex++;
              // If there are more cards, display the next card
              if (currentCardIndex < quizCards.length) {
                const currentCard = quizCards[currentCardIndex];
                displayCard(currentCard);
              } else {
                endQuiz();
              }
            } else {
              // Otherwise, display an error message
              const errorMessage = document.getElementById('error-message');
              errorMessage.classList.remove('d-none');
            }
          });
        });
  
        // Hide the error message
        const errorMessage = document.getElementById('error-message');
        errorMessage.classList.add('d-none');
      }
  
      // Function to end the quiz
      function endQuiz() {
        // Retrieve the quiz elements from the DOM
        const quizElement = document.getElementById('quiz');
        const resultsElement = document.getElementById('results');
  
        // Hide the quiz element and show the results element
        quizElement.classList.add('d-none');
        resultsElement.classList.remove('d-none');
  
        // Display the results
        const score = quizCards.length;
        res.status(200).json({ message: 'Flashcards created successfully.', score });
      }
  
      displayCard(currentCard);
    } catch (err) {
      console.error(err);
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