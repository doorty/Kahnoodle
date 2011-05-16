module.exports = function(app) {

  var io = require('socket.io');

  // socket.io
  io.listen(app).on('connection', function(socket) { 
  
    console.log('connection!')

    // tell me what is my id
     socket.send( { sessionId: socket.sessionId } );
   
     console.log('session id = ' + socket.sessionId);
  
    // tell everyone else 
    // socket.broadcast({});
  
    // tell everyone including myself
    // socket.boradcast({});
  
    socket.on('message', function(json) { 

      socket.broadcast(json);
    
    });
  
    socket.on('disconnect', function() { 
    
    });
  
  });
};