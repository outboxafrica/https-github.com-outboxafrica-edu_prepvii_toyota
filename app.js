const express = require('express');
const app = express();
const questionRoutes = require('./API/routes/questions');
const answerRoutes = require('./API/routes/answers');

app.use('/questions', questionRoutes);
app.use('/answers', answerRoutes);

module.exports = app;