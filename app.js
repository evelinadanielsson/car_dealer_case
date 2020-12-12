const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mysql = require('mysql');

const app = express();

// db config
var db = require('./config/database');
var connection = mysql.createConnection(db.connection);

connection.connect((err) => {
    if (err) throw err;
    console.log('mySQL connected!');
});

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.static('public'))

// Routs
app.use('/', require('./routs/index'));
app.use('/users', require('./routs/users'));



const PORT = process.env.Port || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));