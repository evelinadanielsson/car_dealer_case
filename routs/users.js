const express = require('express');
const user = require('../controllers/user');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers').user;


// Login page

router.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the API!',
}));

// router.post('/api/employee', userController.create);

router.get('/login', (req, resp) => resp.render('login'));

// Register page
router.get('/register', (req, res) => res.render('register'));



router.post('/register', (req, res) => {
    // const {email, password, password2 } = req.body;
    user.create(req, res);
    //res.redirect('/users/login');
    // res.send('hello');
});

// Login handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login'
    })(req, res, next);
});

// Logout handle

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/users/login');
});

module.exports = router;