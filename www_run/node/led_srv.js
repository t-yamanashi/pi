var ws = require("websocket.io");
var io = require("./ledlib.js");
var server = ws.listen(8888, listenFn);
server.on("connection", connectionFn);

function listenFn(){
	print("listen");
}

function connectionFn(socket){
	socket.on("message", messageFn)
	function messageFn(data){
		print(data.toString(2));
		io.ledAll(data);
	}
}

function print(str){
	console.log(str);
}
