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


//For dashboard

// Create a new card element
const card = document.createElement('div');
card.classList.add('card');

card.innerHTML = `
{{#each flashcards}}
<div class="card container bg-dark" style="width: 18rem;">
  <div class="card-body">
      <h5 class="card-title">{{this.title}}</h5>
      <p class="card-subtitle">Category: {{this.Category.name}}</p>
      <a href="/api/flashcards/{{this.id}}" class="card-link">Select</a>
      <a href="/flashcards/{{this.id}}">Edit</a>
  </div>
</div>
{{/each}}
`

// Create a new link element and set its attributes
const link = document.createElement('a');
link.href = '/api/flashcards'; // link to the flashcard page
link.textContent = 'View Flashcards';

// Append the link element to the card element
card.appendChild(link);

// Append the card element to the dashboard container
const myFlashcards = document.querySelector('#flashcard-thumbnail');
myFlashcards.appendChild(card);
