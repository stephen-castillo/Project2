const router = require('express').Router();

// Query database
let deletedRow = 1;

db.query(`DELETE FROM flashcards WHERE id = ?`, deletedRow, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

// Query database
db.query('SELECT * FROM flashcards, questions, quiz, results, user', function (err, results) {
  console.log(results);
});

module.exports = router;