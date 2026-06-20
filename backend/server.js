require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // lets server read JSON request bodies

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Prep Cubes API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});