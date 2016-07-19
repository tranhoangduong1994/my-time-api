var express = require('express');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(function(req, res, next) {
  var allowedOrigins = ["http://localhost:8000", "https://hub102.com"];
  var origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", function(req, res) {
  res.json({
    'timestamp': new Date().getTime() / 1000
  });
});

app.listen(PORT, function() {
  console.log('OK');
})