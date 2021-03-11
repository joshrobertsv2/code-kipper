const User = require('../models/Users')
const LocalStrategy = require('passport-local').Strategy

const passportLocal = passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
))

const serialize = passport.serializeUser(function(user, done) {
  done(null, user.id);
});

const deserialize = passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = { passportLocal, serialize, deserialize}


