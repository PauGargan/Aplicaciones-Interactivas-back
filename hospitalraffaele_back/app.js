const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const http = require('http');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

require('./routes')(app);

app.get("*", (req, res) => res.status(200).send({
  message: "Estamos en el aire",
}));

// Setup server port
var port = process.env.PORT || 8080;
console.log(port);
const server = http.createServer(app);
server.listen(port);

module.exports = app;