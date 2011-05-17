var express = require('express');
var app = express.createServer();

require('./mongodb');
require('./express')(express, app);
require('./socket')(app);

app.listen(3000);

console.log('Express app started on port 3000');

