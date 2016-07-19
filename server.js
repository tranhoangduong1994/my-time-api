var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;

app.get("/", function(req, res) {
  res.json({
    'timestamp': new Date().getTime() / 1000
  });
});

app.listen(PORT, function() {
  console.log('OK');
})