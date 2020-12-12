const express = require('express');
const router = express.Router();


// Login page
router.get('/login', (req, resp) => resp.render('login'));

// Register page
router.get('/register', (req, resp) => resp.render('register'));

module.exports = router;