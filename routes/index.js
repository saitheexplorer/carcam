var express = require('express');
var RaspiCam = require('raspicam');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {title: 'Express'});
});

router.post('/picture', function (req, res) {
    // take a picture
});

module.exports = router;
