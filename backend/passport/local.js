const passport = require('passport')
const Users = require('../models/Users')
const LocalStrategy = require('passport-local').Strategy

const passportLocal = new LocalStrategy(
  {usernameField:"email", passwordField:"password"},
  function(username, password, done) {
    Users.findOne({ email: username }, function(err, user) {
      if (err) 
        return done(err)
      if (!user) 
        return done(null, false, { message: 'Incorrect username.' });
      if (user.password != password) 
        return cb(null, false)
      else 
        return done(null, user);
    });
  }
)

const serialize = passport.serializeUser(function(user, done) {
  done(null, user.id);
});

const deserialize = passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = { passportLocal, serialize, deserialize}


