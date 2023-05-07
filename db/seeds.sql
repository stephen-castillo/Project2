INSERT INTO flashcards
    (name)
VALUES
    ("id"),
    ("creator"),
    ("question"),
    ("answer"),
    ("explanation");

INSERT INTO question
    (name)
VALUES
    ("id"),
    ("quizId"),
    ("question"),
    ("options"),
    ("corretOptionIndex");

INSERT INTO quiz
    (name)
VALUES
    ("id"),
    ("creator"),
    ("title"),
    ("description"),
    ("category"),       
    ("flashcards");

    INSERT INTO results
     (name)
VALUES ("id"),
       ("score"),
       ("totals"),
       ("createdAt"),
       ("updatedAt");

       INSERT INTO User 
       (name)
VALUES ("id"),
       ("username"),
       ("email"),
       ("password");