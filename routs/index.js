const express = require('express');
const router = express.Router();
const employeeController = require('../controllers').employee;
const { ensureAuthenticated } = require('../config/auth');


router.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the API!',
    }));

router.post('/api/employee', employeeController.create);

// Carmodels page
router.get('/carmodels', ensureAuthenticated, (req, res) => res.render('carmodels', { layout: 'layout-nav',
    email: req.user.email }));

// Employees page
router.get('/employees', ensureAuthenticated, (req, res) => res.render('employees', { layout: 'layout-nav',
    email: req.user.email }));

// Total sales page
router.get('/total_sales', ensureAuthenticated, (req, res) => 
res.render('total_sales', { layout: 'layout-nav',
    email: req.user.email
}));

// Settings page
router.get('/settings', ensureAuthenticated, (req, res) => res.render('settings', { layout: 'layout-nav',
    email: req.user.email }));

router.get('/', (req, res) => res.render('welcome'));

router.get('/dashboard', ensureAuthenticated, (req, res) => 
res.render('dashboard', { layout: 'layout-nav',
    email: req.user.email
}));

module.exports = router;