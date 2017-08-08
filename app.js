const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

// Require routes into the application.
require('./server/routes')(app);

// Default catch-all for test.
app.get('*', (req, res) => res.status(200).send({
  message: 'Hello world.',
}));

module.exports = app;