var RaspiCam = require('raspicam');
var events = require('events');

var Camera = new events.EventEmitter();
var CarCam = new RaspiCam({
    mode: 'timelapse',
    output: __dirname,
    'timelapse': 1000
});

Camera.status = 'inactive';

Camera.arm = function (data) {
    this.status = 'active';
    this.emit('arm', data);
};

Camera.disarm = function (data) {
    this.status = 'inactive';
    this.emit('disarm', data);
};

Camera.on('arm', function () {
    // CarCam.start();
    console.log('camera armed');
});

Camera.on('disarm', function () {
    // CarCam.stop();
    console.log('camera disarmed');
});

module.exports = Camera;