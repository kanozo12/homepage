const express = require('express');
const app = express();

app.get('/ceo', function (req, res) {
    res.render('ceo');
});

app.get('/certi', function(req,res) {
    res.render('certi');
})

app.get('/history', function(req,res){
    res.render('history');
})
module.exports = app;