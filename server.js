var express = require('express');

//Create our App
var app = express();
//tell it which folder we want to serve
app.use(express.static('public'));
//start the server
app.listen(3000, function() {
  console.log('Express Server is up on port 3000');
});
