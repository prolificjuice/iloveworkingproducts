const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const passportSetup = require('./config/passport-setup');
const authRoutes = require('./routes/auth-routes');
const keys = require('./config/keys');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());


//MongoDB Database Setup
require('./models/db.js');


//routing Setup

// set up routes
app.use('/auth', authRoutes);

var routes = require('./routes/routes.js');
app.use('/', routes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.

const port = process.env.PORT || 5000;
app.listen(port);
