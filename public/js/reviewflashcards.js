// Flashcard review scoring

let score = 0;

function checkAnswer(correctAnswer, selectedOption) {
  if (correctAnswer === selectedOption) {
    score++;
  }
}

function showScore() {
  const totalQuestions = document.querySelectorAll('.flashcard').length;
  const percentageScore = Math.round((score / totalQuestions) * 100);
  alert(`You scored ${percentageScore}%`);
}

const optionsContainers = document.querySelectorAll('.flashcard-options-container');

optionsContainers.forEach(container => {
  const options = container.querySelectorAll('.flashcard-option');
  const correctAnswer = container.parentNode.querySelector('.flashcard-answer').textContent;
  
  options.forEach(option => {
    option.addEventListener('click', () => {
      const selectedOption = option.textContent;
      checkAnswer(correctAnswer, selectedOption);
    });
  });
});

const lastFlashcard = document.querySelectorAll('.flashcard').pop();

lastFlashcard.addEventListener('click', () => {
  showScore();
});





//For dashboard, under My Flashcards

const createFlashcardsBtn = document.querySelector('#create-flashcards-btn');

createFlashcardsBtn.addEventListener('click', () => {


// Get the form input values
const title = document.querySelector('#deck-title').value;
const category = document.querySelector('#deck-category').value;

function generateCard(title, category) {
  return `
    <div class="card container bg-dark" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-subtitle">Category: ${category}</p>
      </div>
    </div>
  `;
}

// Create a new card element
const card = document.createElement('div');
card.classList.add('card');

// Generate the card HTML with the form input values
card.innerHTML = generateCard(title, category);

// Create a new link element and set its attributes
const link = document.createElement('a');
link.href = '/api/flashcards'; // link to the flashcard page
link.textContent = 'View Flashcards';

// Append the link element to the card element
card.appendChild(link);

// Append the card element to the dashboard container and the link element to the card
const myFlashcards = document.querySelector('#flashcard-thumbnail');
myFlashcards.appendChild(card);

});