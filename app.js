const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const session = require('express-session');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');

const app = express();

// Passport config
require('./config/passport')(passport)

// Bodyparser
app.use(express.urlencoded({ extended: false }));

// Express session
app.use(session({
    secret: 'secrets',
    resave: true,
    saveUninitialized: true
  }))

app.use(passport.initialize());
app.use(passport.session());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false}));

// Models
var models = require('./models');

// Sync database
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine.');
}).catch(function(err) {
    console.log(err, "Something went wrong with database update.")
});

//require('./routs')(app);

// app.get('*', (req, res) => res.status(200).send({
//     message: "Welcome to the carshop!"
// }));

//module.exports = app;

// // db config
// var db = require('./config/database');
// var connection = mysql.createConnection(db.connection);

// connection.connect((err) => {
//     if (err) throw err;
//     console.log('mySQL connected!');
// });

// // EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.static('public'))

// // Routs
app.use('/', require('./routs/index'));
app.use('/users', require('./routs/users'));



const PORT = process.env.Port || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));