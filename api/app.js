var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./config/database')
var cors = require('cors')

var newsBrazilRouter = require('./routes/news-brazil');
var newsSportRouter = require('./routes/news-sport');
var newsHealthRouter = require('./routes/news-health');
var newsBusinessRouter = require('./routes/news-business');
var newsTechnologyRouter = require('./routes/news-technology');



var app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors())
app.use('/news-brazil', newsBrazilRouter);
app.use('/news-sport', newsSportRouter);
app.use('/news-health', newsHealthRouter);
app.use('/news-business', newsBusinessRouter);
app.use('/news-technology', newsTechnologyRouter);


var port = 5000;

app.listen(port, () => {
    console.log('CORS-enabled web server listening on port', port)
  })
  

module.exports = app;
