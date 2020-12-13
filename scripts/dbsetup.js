var mysql    = require('mysql');
var dbconfig = require('../config/database');

// Script for setting up database and tables
var connection = mysql.createConnection(dbconfig.connection);

// creates database
connection.query('CREATE DATABASE ' + dbconfig.database);


// Set up tables
connection.query('\
  CREATE TABLE `' + dbconfig.database + '`.`employees` ( \
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, \
    `name` VARCHAR(255) NOT NULL \
  )');

// maybe price shouldn't be set to data type INT
  connection.query('\
  CREATE TABLE `' + dbconfig.database + '`.`carmodels` ( \
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, \
    `brand` VARCHAR(255) NOT NULL, \
    `model` VARCHAR(255) NOT NULL, \
    `price` INT NOT NULL \
  )');

  connection.query('\
  CREATE TABLE `' + dbconfig.database + '`.`sales` ( \
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, \
    `employee_id` INT NOT NULL, \
    `carmodel_id` INT NOT NULL, \
    FOREIGN KEY (employee_id) REFERENCES employees (id), \
    FOREIGN KEY (carmodel_id) REFERENCES carmodels (id) \
  )');


  connection.query('\
  CREATE TABLE `' + dbconfig.database + '`.`users` ( \
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT, \
    `email` VARCHAR(255) NOT NULL, \
    `password` VARCHAR(255) NOT NULL, \
    `employee_id` INT, \
    FOREIGN KEY (employee_id) REFERENCES employees (id) \
  )');



console.log('Success! Database created.');
connection.end();