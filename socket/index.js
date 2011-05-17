module.exports = function(app) {

  var io = require('socket.io');

  // socket.io
  io.listen(app).on('connection', function(socket) { 

    // tell me what is my id
     socket.send( { sessionId: socket.sessionId } );
   
     console.log('session id = ' + socket.sessionId);
  
    // tell everyone else 
    // socket.broadcast({});
  
    // tell everyone including myself
    // socket.boradcast({});
    
    socket.emit('test', { msg: 'hello'});
    
    socket.on('login', function(account) {
      console.log('tried to sign in as ' + account.username + ' with password ' + account.password);
      socket.send('login received');
    });
  
    socket.on('message', function(json) { 

      socket.broadcast(json);
    
    });
  
    socket.on('disconnect', function() { 
    
    });
  
  });
};