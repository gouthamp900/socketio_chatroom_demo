var app = require('express')();

var http = require('http').Server(app);

var io = require('socket.io')(http);

app.get('/', function(req, res){
	//res.send('<h1>Hello World</h1>');
	res.sendFile('/Users/goutham/Downloads/websocket_lecture/index.html');
});

io.on('connection', function(socket){
	console.log("new user connected");
	socket.on('disconnect', function(){
		console.log("user has disconnected");
	});
	socket.on('chat message', function(msg){
		console.log('The message is : ' + msg);
		io.emit('chat message', msg);
	});
});

http.listen(3000, function(){
	console.log("Listening on port 3000");
});