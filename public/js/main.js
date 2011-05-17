$(document).ready(function() {

  var kahnoodle1 = new Kahnoodle({person:"Bob", type:"Quality Time", description:"Long walk on the beach", time:"1/2/2011 2:30PM EST"});
  var kahnoodle2 = new Kahnoodle({person:"Jane", type:"Sex", description:"Long walk on the beach", time:"1/2/2011 2:30PM EST"});
  var kahnoodle3 = new Kahnoodle({person:"Bob", type:"Type", description:"Long walk on the beach", time:"1/2/2011 2:30PM EST"});

  var kahnoodles = new Kahnoodles([kahnoodle1, kahnoodle2, kahnoodle3]);

  var kahnoodleView = new KahnoodleView({el: $("#kahnoodles"), model: kahnoodle1});

  /**************************************************************************
   * socket connection with server. 
   * iOS > 4.2 uses WebSocket, iOS < 4.2 uses long polling
   **************************************************************************/
  var socket = new io.Socket('10.0.1.2', { port: 3000 }); 
  
  socket.connect();
  
  socket.on('connect', function() { 
    console.log('connected at ' + new Date());
    
    socket.emit('login', {
      username: 'bob',
      password: 'pass'
    });
  }); 
  
  socket.on('test', function(msg) {
    console.log('test msg = ' + msg);
  });
  
  socket.on('message', function(json) { 
    console.log('json: ' + json.sessionId);
  });
  
  socket.on('disconnect', function() { 
    console.log('disconnected');
  });
});