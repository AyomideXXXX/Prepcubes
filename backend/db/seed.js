const Database = require('better-sqlite3');
const path = require('path');


const db = new Database(path.join(__dirname, 'database.db'));
db.prepare('DELETE FROM Questions').run();
const questions = [
    {
        exam_type: 'SAT',
        subject: 'Math',
        topic: 'Linear Equations',
        difficulty: 'easy',
        question_text: 'If 3x + 6 = 21, what is the value of x?',
        options: JSON.stringify(['3', '5', '7', '9']),
        correct_answer: '5',
        explanation: '3x = 21 - 6 = 15, therefore x = 5'
    },
    {
        exam_type: 'SAT',
        subject: 'Math',
        topic: 'Linear Equations',
        difficulty: 'medium',
        question_text: 'A line passes through (0, 3) and (4, 11). What is the slope?',
        options: JSON.stringify(['1', '2', '3', '4']),
        correct_answer: '2',
        explanation: 'Slope = (11 - 3) / (4 - 0) = 8 / 4 = 2'
    },
    {
        exam_type: 'SAT',
        subject: 'Math',
        topic: 'Quadratics',
        difficulty: 'medium',
        question_text: 'What are the solutions to x² - 5x + 6 = 0?',
        options: JSON.stringify(['x = 1 and x = 6', 'x = 2 and x = 3', 'x = -2 and x = -3', 'x = 0 and x = 5']),
        correct_answer: 'x = 2 and x = 3',
        explanation: 'Factor: (x - 2)(x - 3) = 0, so x = 2 or x = 3'
    },
    {
        exam_type: 'SAT',
        subject: 'Reading & Writing',
        topic: 'Vocabulary in Context',
        difficulty: 'easy',
        question_text: 'As used in the passage, "ambiguous" most nearly means:',
        options: JSON.stringify(['clear', 'uncertain', 'ancient', 'forceful']),
        correct_answer: 'uncertain',
        explanation: 'Ambiguous means open to more than one interpretation; not clear or decided'
    },
    {
        exam_type: 'SAT',
        subject: 'Reading & Writing',
        topic: 'Command of Evidence',
        difficulty: 'hard',
        question_text: 'Which choice provides the best evidence for the answer to the previous question?',
        options: JSON.stringify(['Lines 1-3', 'Lines 12-15', 'Lines 23-26', 'Lines 31-34']),
        correct_answer: 'Lines 12-15',
        explanation: 'Lines 12-15 directly support the claim made in the previous question'
    },
    {
        exam_type: 'ACT',
        subject: 'Math',
        topic: 'Trigonometry',
        difficulty: 'medium',
        question_text: 'In a right triangle, if sin(θ) = 3/5, what is cos(θ)?',
        options: JSON.stringify(['3/4', '4/5', '4/3', '5/3']),
        correct_answer: '4/5',
        explanation: 'Using Pythagorean identity: cos(θ) = √(1 - sin²(θ)) = √(1 - 9/25) = √(16/25) = 4/5'
    },
    {
        exam_type: 'ACT',
        subject: 'English',
        topic: 'Punctuation',
        difficulty: 'easy',
        question_text: 'Which punctuation correctly joins two independent clauses?',
        options: JSON.stringify(['comma only', 'semicolon', 'colon', 'dash']),
        correct_answer: 'semicolon',
        explanation: 'A semicolon correctly joins two related independent clauses without a conjunction'
    },
    {
        exam_type: 'ACT',
        subject: 'Science',
        topic: 'Data Interpretation',
        difficulty: 'medium',
        question_text: 'According to the table, which experiment showed the highest reaction rate at 40°C?',
        options: JSON.stringify(['Experiment 1', 'Experiment 2', 'Experiment 3', 'Experiment 4']),
        correct_answer: 'Experiment 3',
        explanation: 'Experiment 3 recorded the highest reaction rate value at 40°C based on the data'
    },
    {
        exam_type: 'ACT',
        subject: 'Reading',
        topic: 'Main Idea',
        difficulty: 'easy',
        question_text: 'The primary purpose of the passage is to:',
        options: JSON.stringify([
            'argue against a popular theory',
            'describe the development of a concept',
            'compare two opposing viewpoints',
            'explain the causes of a historical event'
        ]),
        correct_answer: 'describe the development of a concept',
        explanation: 'The passage traces how the concept evolved over time without taking a strong argumentative stance'
    },
    {
        exam_type: 'ACT',
        subject: 'Math',
        topic: 'Statistics',
        difficulty: 'easy',
        question_text: 'What is the median of the set: {4, 7, 2, 9, 5}?',
        options: JSON.stringify(['4', '5', '6', '7']),
        correct_answer: '5',
        explanation: 'Arranged in order: 2, 4, 5, 7, 9. The middle value is 5'
    },
    {
        exam_type:'SAT',
        subject:'Math',
        topic:'Algebra',
        difficulty:'hard',
        question_text:'X +21=55, Find the value of X',
        options:JSON.stringify([34,54,74,92]),
        correct_answer:'34',
        explanation:' 55 minus 21 is 34'
    },
      {
        exam_type:'ACT',
        subject:'Math',
        topic:'Algebra',
        difficulty:'easy',
        question_text:'X +12=30, Find the value of X',
        options:JSON.stringify([18,5,24,12]),
        correct_answer:'18',
        explanation:' 30 minus 12 is 18'
    },
    
];

const insert = db.prepare(`
    INSERT INTO Questions (exam_type, subject, topic, difficulty, question_text, options, correct_answer, explanation)
    VALUES (@exam_type, @subject, @topic, @difficulty, @question_text, @options, @correct_answer, @explanation)
`);

const insertMany = db.transaction((questions) => {
    for (const q of questions) insert.run(q);
});

insertMany(questions);
console.log(`${questions.length} questions seeded successfully!`);