var i2c = require("i2c-bus")
var MPU6050 = require("i2c-mpu6050")

var address = 0x68
var i2c1 = i2c.openSync(1)

var sensor = MPU6050(i2c1, address)

setInterval(function() {
    var data = sensor.readSync();
	console.log(data.rotation)
}, 1000)
