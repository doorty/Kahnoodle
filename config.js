module.exports = function(express, app) {
  
  var stylus = require('stylus');
  var MemStore = express.session.MemoryStore;

  app.configure(function(){
    app.use(stylus.middleware({ debug: true, src: __dirname + '/views', dest: __dirname + '/public', compile: compileStylus }));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    var oneYear = 31557600000;
    app.use(express.static(__dirname + '/public', { maxAge: oneYear }));
    app.use(express.cookieParser());
    app.use(express.session({ secret: 'secret', store: MemStore({ reapInterval: 10 * 60000 }) }));
    app.use(app.router);
  });

  app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  });

  app.configure('production', function(){
    app.use(express.errorHandler());
  });

  app.set('view engine', 'jade');

  function compileStylus(str, path) {
        return stylus(str)
          //.import(__dirname + 'views/css/mixins/blueprint')
          //.import(__dirname + 'views/css/mixins/global-reset')
          .set('filename', path)
          .set('warn', true)
          .set('compress', true);
  }
  
};