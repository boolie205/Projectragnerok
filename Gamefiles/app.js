

var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/',function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
});
app.use('/client',express.static(__dirname + '/client'));

serv.listen(2000);

console.log('Server started, top kek. Also robin congrats on making it work.');
console.log('Not to mention how seriously annoying Express is tbh mate');
console.log('Eyyy');

