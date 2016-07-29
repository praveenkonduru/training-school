var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, '/../trainingschool')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../trainingschool/index.html'));
});
app.listen('8000');