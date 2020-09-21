var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello Thank you for your booking. You have now opened the door to many more memorable trips. Wherever you choose to travel, we are here to make it easier for you to experience the World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
