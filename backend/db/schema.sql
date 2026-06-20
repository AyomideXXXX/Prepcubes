CREATE TABLE Users (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
email TEXT,
password TEXT,
exam_type TEXT,
target_score INTEGER,
test_date DATE,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Questions(
id INTEGER PRIMARY KEY AUTOINCREMENT,
exam_type TEXT,
subject TEXT,
difficulty TEXT,
question_text TEXT,
options TEXT,
correct_answer TEXT,
explamation TEXT
);