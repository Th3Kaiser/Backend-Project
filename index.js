const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});



const lessons = [
    { LessonID: 1, name: 'Math', Location: 'Colindale', price: 10, time: ' 16:00  ', icon: 'fas fa-calculator', availableSlots: 5 },
    { LessonID: 2, name: 'English', Location: 'Hendon', price: 12, time: ' 16:00  ', icon: 'fas fa-book', availableSlots: 5 },
    { LessonID: 3, name: 'Music Lessons', Location: 'Colindale', price: 15, time: ' 17:00  ', icon: 'fas fa-music', availableSlots: 5 },
    { LessonID: 4, name: 'Drama Club', Location: 'Hendon', price: 12, time: ' 17:30  ', icon: 'fas fa-theater-masks', availableSlots: 5 },
    { LessonID: 5, name: 'Art Class', Location: 'Brent Cross', price: 10, time: ' 16:00  ', icon: 'fas fa-paint-brush', availableSlots: 5 },
    { LessonID: 6, name: 'Coding Club', Location: 'Hendon', price: 15, time: ' 18:00  ', icon: 'fas fa-laptop-code', availableSlots: 5 },
    { LessonID: 7, name: 'Science Club', Location: 'Colindale', price: 12, time: ' 14:30  ', icon: 'fas fa-flask', availableSlots: 5 },
    { LessonID: 8, name: 'Sports Club', Location: 'Hendon', price: 10, time: ' 17:00  ', icon: 'fas fa-futbol', availableSlots: 5 },
    { LessonID: 9, name: 'Chess Club', Location: 'Hendon', price: 8, time: ' 14:00  ', icon: 'fas fa-chess', availableSlots: 5 },
    { LessonID: 10, name: 'Dance Class', Location: 'Brent Cross', price: 15, time: ' 21:00  ', icon: 'fas fa-music', availableSlots: 5 }
];

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.get('/lessons', (req, res) => {
    res.json(lessons);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});