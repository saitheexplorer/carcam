var express = require('express');
var router = express.Router();

var camera = require('../camera');

router.get('/', function (req, res) {
    res.render('index', {title: 'CarCam', cameraStatus: camera.status});
});

router.post('/', function (req, res, next) {
    // arm/disarm security
    if (camera.status === 'active') camera.disarm();
    else camera.arm();

    res.send({status: camera.status});
});

router.post('/picture', function (req, res) {
    // take a picture
    next();
});

module.exports = router;
