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
topic TEXT,
difficulty TEXT,
question_text TEXT,
options TEXT,
correct_answer TEXT,
explanation TEXT
);
CREATE TABLE Placement_results (
id INTEGER PRIMARY KEY AUTOINCREMENT,
user_id INTEGER,
subject TEXT,
topic TEXT,
score INTEGER,
taken_at DATETIME DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (user_id) REFERENCES Users(id)
);
 CREATE TABLE sessions(
id INTEGER PRIMARY KEY AUTOINCREMENT,
user_id INTEGER,
type TEXT,
started_at DATETIME DEFAULT CURRENT_TIMESTAMP,
completed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
score INTEGER,
FOREIGN KEY (user_id) REFERENCES Users (id)
 );

CREATE TABLE Daily_questions(
id INTEGER PRIMARY KEY AUTOINCREMENT,
user_id INTEGER,
question_id INTEGER,
date DATE,
answered BOOLEAN,
correct BOOLEAN,
FOREIGN KEY(user_id) REFERENCES Users (id),
FOREIGN KEY(question_id) REFERENCES Questions(id)
);
CREATE TABLE Streaks(
id INTEGER PRIMARY KEY AUTOINCREMENT, 
user_id INTEGER,
current_streak INTEGER,
longest_streak INTEGER,
last_active DATETIME,
FOREIGN KEY (user_id) REFERENCES Users(id)
);
CREATE TABLE Friends (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    friend_id INTEGER,
    status TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (friend_id) REFERENCES Users(id)
);
CREATE TABLE Achievements(
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
description TEXT,
criteria TEXT,
icon TEXT
);
CREATE TABLE User_Achievements(
id INTEGER PRIMARY KEY AUTOINCREMENT,
user_id INTEGER,
achievement_id INTEGER,
unlocked_at DATETIME DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (user_id) REFERENCES Users(id),
FOREIGN KEY (achievement_id) REFERENCES Achievements(id)
);