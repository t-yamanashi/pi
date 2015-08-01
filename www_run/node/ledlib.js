var fs = require("fs");
var dir = "/sys/class/gpio/";
var LED = [18, 23, 24, 25];


function out(file, data){
	fs.writeFile(file, data, errfn);
	function errfn(err){
		console.log(err);
	}
}

function initLedAll(){
	var i;
	for (i = 0; i  < 4; i++){
		iniLed(i);
	}
}

function iniLed(port){
	out(dir + "export", LED[port]);
	out(dir + "gpio" + LED[port] + "/direction", "out");
}

function led(port, flg){
	out(dir + "gpio" + LED[port] + "/value", flg);
}

exports.ledAll = function(data){
//function ledAll(data){
        var i;
	var flg = 0;
	for (i = 0; i  < 4; i++){
		flg = 0x1 & (data >> i);
                led(i, flg);
        }
}

initLedAll();
//ledAll(0xF);
