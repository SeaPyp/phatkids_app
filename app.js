var express = require('express');
var app = express();
var logger = require('morgan');

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;

  app.get('/', function(req, res){
    res.send();
  });

app.listen(port, function() {
  console.log('listening of port ' + port);
});
