// routing map
var express = require('express');
var util = require('util');
var router = express.Router();
var indexController = require('../controllers/index.controller');

// basic routes
router.get('/', indexController.getIndex);
router.get('/time', indexController.getTime);

// form routes
router.post('/send', function(req, res) {
    res.send("Ciao " + req.body.name_field + "!");
});

module.exports = router;
