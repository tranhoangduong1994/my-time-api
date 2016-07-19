var express = require('express');
var cors = require("cors");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "http://localhost:8000");
  // res.header("Access-Control-Allow-Origin", "https://apps.facebook.com/classic-vegas-slots");
  // res.header("Access-Control-Allow-Origin", "https://hub102.com/staging/slots");
  var allowedOrigins = ["http://localhost:8000", "https://apps.facebook.com/classic-vegas-slots", "https://hub102.com/staging/slots"];
  var origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// var whitelist = ['http://localhost:8000', 'https://apps.facebook.com/classic-vegas-slots/', 'https://hub102.com/staging/slots/'];
// var corsOptions = {
//   origin: function(origin, callback){
//     var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
//     callback(null, originIsWhitelisted);
//   }
// };

app.get("/", function(req, res) {
  res.json({
    'timestamp': new Date().getTime() / 1000
  });
});

app.listen(PORT, function() {
  console.log('OK');
})