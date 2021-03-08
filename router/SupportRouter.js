const express = require('express');
const app = express();

app.get('/location', function (req, res) {
    res.render('location');
});

module.exports = app;