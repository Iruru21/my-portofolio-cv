// backend/index.js
const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('../data'); // Fixed path - data.js is in backend root, not api folder

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));

// Hapus atau komentari baris ini saat deploy ke Vercel:
// app.listen(PORT, () => {
// console.log(` Server backend berjalan di http://localhost:${PORT}`);
// });

// Penting: Ekspor instance aplikasi Express Anda
module.exports = app;