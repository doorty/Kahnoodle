var io = require('socket.io');
var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/com_kahnoodle');

var app = express.createServer();

require('./config')(express, app);
require('./routes')(app);

app.listen(3000);

console.log('Express app started on port 3000');