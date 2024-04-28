// Create web server
var express = require('express');
var app = express();
var fs = require('fs');

// Create server
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

// Set port
app.set('port', (process.env.PORT || 5000));

// Set public directory
app.use(express.static(__dirname + '/public'));

// Set view engine
app.set('view engine', 'ejs');

// Set views directory
app.set('views', __dirname + '/views');

// Set routes
app.get('/', function(req, res) {
  res.render('index');
});

// Set server
server.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

// Set socket.io
io.sockets.on('connection', function(socket) {
  console.log('Socket connected: ' + socket.id);

  socket.on('comment', function(data) {
    console.log('Comment: ' + data);
    io.sockets.emit('comment', data);
  });
});