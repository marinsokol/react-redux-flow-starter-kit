/* eslint-disable */

const express = require('express');
const path = require('path');
const port = process.env.PORT || 3050;
const app = express();

app.use(express.static(__dirname + '/public'));
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname + '/public/index.html'));
});

const server = app.listen(port, function () {
  const port = server.address().port;
  console.log('Example app listening at http://localhost:', port);
});
