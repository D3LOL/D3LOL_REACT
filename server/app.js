const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const helmet = require('helmet');
const passport = require('passport');
const searchRouter = require('./routers/search.js');
const rankRouter = require('./routers/rank.js');
const championRouter = require('./routers/champion.js');

//passport 


const app = express();
const router = express.Router();

mongoose.connect('mongodb://localhost:27017/d3lol');

require('./passport')(passport);
// Setup logger

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(cookieParser());
app.use(bodyParser.json());
// app.use(flash())
// Protect XSS
app.use(helmet());
app.use(session({
  cookie : {
    maxAge: 1000 * 10 // see below
  },
  secret: 'mySecret',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
// Serve static assets

app.use(express.static(path.resolve(__dirname, '..', 'build')));

require('./routers/auth.js')(app, passport);

app.use('/api/search', searchRouter);
app.use('/api/rank', rankRouter);
// app.use('/api/login', authRouter);
app.use('/api/champion', championRouter);
 
app.get('/checkAuth', isLoggedIn,(req, res) => {
  console.log('inside loggedIN');
  res.status(200).send('OK');
})
// app.get('/rank')
// app.get('/',
// 	function(req, res) {
// 	  res.render('settings', { user: req.user });
// 	});

// Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });
// app.get('/rank', (req, res) => {
//   console.log('sucess req!',req);
//   res.redirect('/');
// })
// app.get('/champion', (req, res) => {
//   console.log('fail req!',req);
//   res.redirect('/');
// })

app.use('*', function(req, res, next){
  console.log('inside *');
  res.redirect('/rankTest')
});

module.exports = app;


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()){
      console.log('LOG IN CHECK')
      return next();
    } else {
      console.log('LOG IN FAILED')
      res.status(200).send('Not Logged In, FAIL');
    }

    // if they aren't redirect them to the home page
}
