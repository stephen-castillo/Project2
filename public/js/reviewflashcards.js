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
