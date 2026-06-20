const express = require('express');
const router = express.Router();
const db = require('../db/db');
const protect = require('../middleware/auth');

// Mode 1 - Standard practice test by exam type
router.get('/practice/:exam_type', protect, (req, res) => {
    
const result = db.prepare('SELECT * FROM Questions WHERE exam_type = ?').all(req.params.exam_type);
res.json(result);
});

// Mode 2 - Filtered/targeted practice

  router.get('/filter', protect, (req, res) => {
    const { exam_type, subject, difficulty } = req.query;

    let query = 'SELECT * FROM Questions WHERE 1=1';
    const params = [];

    if (exam_type) {
        query += ' AND exam_type = ?';
        params.push(exam_type);
    }
    if (subject) {
        query += ' AND subject = ?';
        params.push(subject);
    }
    if (difficulty) {
        query += ' AND difficulty = ?';
        params.push(difficulty);
    }

    const result = db.prepare(query).all(params);
    res.json(result);
});


module.exports = router;