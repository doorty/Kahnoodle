module.exports = function(express, app) {
  
  require('./config')(express, app);
  require('./routes')(app);
  
};