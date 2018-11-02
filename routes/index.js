// routing map
var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index.controller');

router.get('/', function(req, res) {
    res.render("index", { title: "Express" });
});

router.get('/time', function(req, res) {
    var now = new Date();
    res.send('Sono le ore: ' + now.toLocaleTimeString());
});

router.post('/send', function(req, res) {
   res.send("Ciao " + req); 
});

module.exports = router;