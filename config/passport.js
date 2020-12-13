const LocalStrategy = require('passport-local').Strategy;
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');


// Load User Model

const User = require('../models').users;



module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email'}, (email, password, done) => {
            // Match user
            
            User.findOne({ where: { email: email } })
            .then(user => {
                if (!user) {
                    return done(null, false, { message: 'Email is not registered'});
                }
            // Match password
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;
            
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Password incorrect' });
                }
            });
            })
            .catch()
        })
    );
    
    passport.serializeUser((user, done) => {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findByPk(id).then(function(user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });
}