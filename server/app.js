const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const helmet = require('helmet');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy
const searchRouter = require('./routers/search.js');
const rankRouter = require('./routers/rank.js');
const authRouter = require('./routers/auth.js');

//passport 

passport.use(new FacebookStrategy({
    clientID: 183216738826974,
    clientSecret: 8b227a26867fdc7ce8cc43f6a989733f,
    callbackURL: "http://localhost:3000/auth/facebook/return"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

//Express

const rankRouter = require('./routers/rank.js');
const app = express();
const router = express.Router();

app.use(bodyParser.json());

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Protect XSS
app.use(helmet());

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Search Router
app.use('/api/search', searchRouter);

app.use('/api/rank', rankRouter);

app.use('/login', authRouter);

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

app.get('/',
	ensureLoggedIn('/login'),
	function(req, res) {
	  res.render('settings', { user: req.user });
	});

// Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });

module.exports = app;
