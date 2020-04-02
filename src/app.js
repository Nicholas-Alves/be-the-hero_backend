const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');
require('dotenv/config');

const app = express();

const whitelist = [process.env.WEB_BTH, process.env.LOCALHOST];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
