#!/usr/bin/node

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./routes/index');

// set template engine to ejs
app.set('view engine', 'ejs');

// set views folder
app.set('views', path.join(__dirname, 'views'));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// load support for body parsing and json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// load support for routes
app.use('/', routes);

// start server
app.listen(8000, function() {
    console.log('Express server listening on port 8000');
});
