const express = require('express');
const router = express.Router();
const employeeController = require('../controllers').employee;
const { ensureAuthenticated } = require('../config/auth');


router.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the API!',
    }));

router.post('/api/employee', employeeController.create);


router.get('/', (req, res) => res.render('welcome'));

router.get('/dashboard', ensureAuthenticated, (req, res) => 
res.render('dashboard', {
    email: req.user.email
}));

module.exports = router;