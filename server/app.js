const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const helmet = require('helmet');

const searchRouter = require('./routers/search.js');
const rankRouter = require('./routers/rank.js');

const app = express();
const router = express.Router();

app.use(bodyParser.json());

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Search Router
app.use('/api/search', searchRouter);
app.use('/api/rank', rankRouter);

// Protect XSS
app.use(helmet());

// Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });

module.exports = app;
