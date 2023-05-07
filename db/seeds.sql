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

       INSERT INTO user_name 
       (name)
VALUES ("id"),
       ("username"),
       ("email"),
       ("password");


-- put here in case we need it 
    --    INSERT INTO user (id, quiz, results, active)
--VALUES (001, "Algebra I", "Linear equations, inequalities, functions, and graphs", true),
    --    (002, "Pharmacy Tech", "Polynomials, Complex Numbers, Vectors", true),
    --    (003, "Driving Test", "Limits, Differentiation, Derivatives", true),
    --    (004, "Koma Sutra", "Intuitively Appealing Axioms Galore", false);
       
