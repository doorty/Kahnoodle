module.exports = function(app) {

  function requiresLogin(req, res, next) {
    if (req.session.user) {
      next();
    } else {
      res.redirect('/sessions/new?redir=' + req.url);
    }
  }

  app.get('/', function(req, res) {
    res.render('index');
  });

  app.get('/about', function(req, res) {
    res.send('About kahnoodle.com');
  });

  app.get('/:user', function(req, res) {
    if (req.session.user === req.params.user) {
      // logged in and accessing my account
      res.send('user ' + req.params.user + ' is me!');
    } else if (false) { 
      // logged in but not my account
      res.send('user ' + req.params.user + ' is not me :/');
    } else {
      next();
    }
  });

  app.get('/:user/add-kahnoodle', requiresLogin, function(req, res) {
    res.send('user ' + req.params.user + ' wants to add kahnoodle');
  });

  app.get('*', function(req, res) {
    res.send('page does not exist', 404);
  });

};