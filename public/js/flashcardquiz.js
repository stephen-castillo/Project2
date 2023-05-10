// Retrieve the form element
const form = document.querySelector('#flashcard-form');

// Attach an event listener to the form submission
form.addEventListener('submit', event => {
  event.preventDefault();

  const questionsInput = document.querySelector('#questions-container'); //id for questions and answers container of the form
  const questions = JSON.parse(questionsInput.value);

  // Map over the questions array to create an array of quiz cards
  const quizCards = questions.map(question => {
    const { question: questionText, correctAnswer, incorrectAnswers } = question; //destructure question object

    const options = [correctAnswer, ...incorrectAnswers];

    // shuffle
    const shuffledOptions = _.shuffle(options);

    // quiz card object with the question, shuffled options, and correct answer
    return {
      question: questionText,
      options: shuffledOptions,
      correctAnswer: correctAnswer
    };
  });

  // Clear the form
  form.reset();

  // Display first card
  let currentCardIndex = 0;
  const currentCard = quizCards[currentCardIndex];
  displayCard(currentCard);

  //next
  const nextButton = document.getElementById('next-button');
  nextButton.addEventListener('click', event => {
    currentCardIndex++;

    // If there are more cards, display the next card
    if (currentCardIndex < quizCards.length) {
      const currentCard = quizCards[currentCardIndex];
      displayCard(currentCard);
    } else {
      endQuiz();
    }
  });

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
          nextButton.click();
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
};
