var LR_TXT = ["Right", "Center", "Left"]; 
var LR_CMD = [0xC, 0xF, 0x3];
var DR_TXT = ["Drive", "Neutral", "Reverse"];
var DR_CMD = [0x2, 0x0, 0x1];
var ws = new WebSocket('ws://192.168.109.10:8888/');

main();

function main(){
	window.addEventListener("deviceorientation", deviceorientation, false);
	view("test");
}

function deviceorientation(e){
	var drVal = toFlg(e.beta);
	var lrVal = toFlg(e.gamma);
	var drCmd = 0;
	var lrCmd = 0;
	var cmd = 0;
	lrCmd = LR_CMD[lrVal];
	drCmd = DR_CMD[drVal];
	drCmd = (drCmd << 2) | drCmd;
	cmd = lrCmd & drCmd;
	view(cmd.toString(2));
	ws.send(cmd);
}

function view(str){
	var v = document.getElementById("v"); 
	v.innerHTML = str; 
}

function toFlg(val){
	var bVal = 10;
	if (bVal < val) return 0;
	if (-bVal > val) return 2;
	return 1;
}

function toLR(val) {
   return LR_TXT[toFlg(val)];
}
