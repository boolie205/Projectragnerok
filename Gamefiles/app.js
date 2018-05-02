//Sorry about the messy code but i've been coding for like 4 months gimmie a break.
//serve pages, tbh shouldn't need more express than this
var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/',function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
});
app.use('/client',express.static(__dirname + '/client'));

serv.listen(2000);
console.log('Server started');
//Define that socket list bruh, maybe imma put some sockets in it. maybe assign those bitches an ID. 
var SOCKET_LIST = {};
//int them sockets boi
var io = require('socket.io') (serv, {});
io.sockets.on('connection', function(socket){
//see I told you i'd assign these bitches and ID
    socket.id = Math.random();
    socket.x = 0;
    socket.y = 0;
    SOCKET_LIST[socket.id] = socket;
    
    console.log('player connected their ID is:  ' + socket.id);
    
});
    



