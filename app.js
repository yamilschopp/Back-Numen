const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(cors());

const indexRouter = require('./router/index');
const apiRouter = require('./router/api');
const apiExternaRouter = require('./router/apiExterna')
const {connect} = require('./db/connection');

app.use('/index', indexRouter);
app.use('/v1', apiRouter);
app.use('/api', apiExternaRouter);
connect();

module.exports = app