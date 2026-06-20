const express = require('express');
const router = express.Router();
const db = require('../db/db');
const protect = require('../middleware/auth');

router.post('/submit', protect, (req, res) => {
    const { exam_type, answers } = req.body;

    // Check exam_type is also present
    if (!exam_type || !answers) {
        return res.status(400).json({ error: 'exam_type and answers are required' });
    }

    // Check answers is a valid non-empty array
    if (!Array.isArray(answers) || answers.length === 0) {
        return res.status(400).json({ error: 'No answers submitted' });
    }

    let correct = 0;
    let mathPoints = 0;
    let readingPoints = 0;

    for (const answer of answers) {
        const question = db.prepare('SELECT * FROM Questions WHERE id = ?').get(answer.question_id);
if (question && answer.selected === question.correct_answer) {
    correct++;

    if (question.subject === 'Math') {
        if (question.difficulty === 'easy') mathPoints += 1;
        else if (question.difficulty === 'medium') mathPoints += 2;
        else if (question.difficulty === 'hard') mathPoints += 3;
    } else if (question.subject === 'Reading & Writing') {
        if (question.difficulty === 'easy') readingPoints += 1;
        else if (question.difficulty === 'medium') readingPoints += 2;
        else if (question.difficulty === 'hard') readingPoints += 3;
    }
   
}

    }
      let English_score= (readingPoints /24) *800;
    let Math_score =( mathPoints/24)* 800;
    let total_score= English_score +Math_score;

    // More to come — projected score calculation goes here

    res.json({
        correct_answers: correct,
        total_questions: answers.length,
        English_score:Math.round(English_score),
        Math_score:Math.round(Math_score),
        total_score:Math.round(total_score)
    });

});

module.exports = router;