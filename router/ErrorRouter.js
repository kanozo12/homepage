const express = require('express');
const app = express();

app.get('/error', function (req, res) {
    res.render('error');
});

module.exports = app;