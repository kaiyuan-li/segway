Bus = require("i2c-bus");
var Gpio = require("onoff").Gpio;
var motor1Forward = new Gpio(18,'out');
var motor1Backward = new Gpio(17,'out');

var motor2Forward = new Gpio(22,'out');
var motor2Backward = new Gpio(27,'out');

motor2Forward.writeSync(1);
motor2Backward.writeSync(0);

motor1Forward.writeSync(1);
motor1Backward.writeSync(0);
setTimeout(function(){
      motor1Forward.writeSync(1);
        motor1Backward.writeSync(1);
	  motor2Forward.writeSync(1);
	    motor2Backward.writeSync(1);
},1000);

