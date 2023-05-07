SELECT *
FROM quickdecks
    JOIN flashcards ON quickdecks.department = flashcards.id;
