const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.render('main');
});

module.exports = app;