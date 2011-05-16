var io = require('socket.io');
var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/com_kahnoodle');

var app = express.createServer();

require('./config')(express, app);
require('./routes')(app);

app.listen(3000);

console.log('Express app started on port 3000');

// socket.io
var socket = io.listen(app);
socket.on('connection', function(client) { 
  
  console.log('connection!')

  // tell me what is my id
   client.send( { sessionId: client.sessionId } );
   
   console.log('session id = ' + client.sessionId);
  
  // tell everyone else my id
  // client.broadcast(piece);
  
  // tell everyone including myself
  // socket.boradcast(piece);
  
  client.on('message', function(json) { 

    client.broadcast(json);
    
  });
  
  client.on('disconnect', function() { 
    
  });
  
});