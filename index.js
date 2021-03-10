const express = require('express');
const http = require('http');
const path = require('path');
const session = require('express-session');

const app = express();
const bodyParser = require('body-parser').urlencoded({ extended: true });

const cookieSecret = "yyhs";

// Mysql 연결
const mysql = require('mysql');
const conn = mysql.createConnection({
    user: 'kanozo12',
    password: '1234',
    host: 'gondr.asuscomm.com'
});

conn.query('USE kanozo12');

// 라우터 분리
const indexRouter = require('./router/IndexRouter');
const errorRouter = require('./router/ErrorRouter');
const companyRouter = require('./router/CompanyRouter');
const supportRouter = require('./router/SupportRouter');
const sitemapRouter = require('./router/SitemapRouter');

app.set('port', 80);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser);
app.use(session({ resave: false, saveUninitialized: false, secret: cookieSecret }));


app.use(function (req, res, next) {
    if (req.session.flashMsg != undefined) {  
        res.locals.flash = req.session.flashMsg; 
        delete req.session.flashMsg;
    }
    next();
});

app.use(express.static(path.join(__dirname + '/')));

// 라우터 오류
app.use('/', indexRouter);
app.use('/error', errorRouter);
app.use('/company', companyRouter);
app.use('/support', supportRouter);
app.use('/sitemap', sitemapRouter);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express 엔진이 port" + app.get('port') + "에서 실행중입니다.");
});
