const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Users = require('../models/users');
const keys = require('./keys');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    Users.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
      console.log("got profile");
      var googleId = {'googleId': profile.id};
      Users.findOne(googleId).then((currentUser)=>{
        if(currentUser){
          console.log("user chilling");
          done(null, currentUser);
        }
        else{
          //create new user
          new Users({
            googleId: profile.id,
            username: profile.displayName,
          }).save().then((newUser) => {
            console.log('New user created: ' + newUser);
            done(null, newUser);
          });
        }
      });
      done(null);
    })
);
