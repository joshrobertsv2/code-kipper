const passport = require('passport')
const Users = require('../models/Users')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

const passportLocal = new LocalStrategy(
  {usernameField:"email", passwordField:"password"},
  function(username, password, done) {
    Users.findOne({ email: username }, function(err, user) {
      if (err) 
        return done(err)
      else if (!user) 
        return done(null, false, { message: 'Incorrect username.' });
      else if(user) {
        bcrypt.compare(password, user.password, (err, res) => {
          if(err) done(err)
          else if(res) {
            done(null, {
              name: user.name, 
              _id: user._id, 
              email: user.email, 
              theme: user.theme, 
              interests: user.interests,
            })
          }
          else done(null, false, {message: 'Incorrect password'})
        })
      }
    });
  }
)

const serialize = passport.serializeUser(function(user, done) {
  done(null, user._id);
});

const deserialize = passport.deserializeUser(function(id, done) {
  Users.findById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = { passportLocal, serialize, deserialize}


