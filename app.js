const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(cors());

const indexRouter = require('./router/index');
const apiRouter = require('./router/api');
const {connect} = require('./db/connection');

app.use('/index', indexRouter);
app.use('/v1', apiRouter);
connect();

module.exports = app