const express = require('express');
const router = express.Router();
const db = require('../db/db');
const protect = require('../middleware/auth');

router.post('/setup',protect, (req, res) => {
    const exam_type =req.body.exam_type.toLowerCase();

    if (!exam_type){
        return res.status(400).json({error:`An exam type has to be selected`})
    }
    if( exam_type!=='sat'&&exam_type!=='act'){
                return res.status(400).json({error:`An exam type has to be selected`})
    }
db.prepare('UPDATE Users SET exam_type = ? WHERE id = ?').run(exam_type.toUpperCase(), req.user.userId);

   res.json({ message: 'Exam type saved', exam_type: exam_type.toUpperCase() });

   
});

module.exports = router;