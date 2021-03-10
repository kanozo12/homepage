const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.render('sitemap');
})

module.exports = app;