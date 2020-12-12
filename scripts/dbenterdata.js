var mysql    = require('mysql');
var dbconfig = require('../config/database');
var jsonData = require('../config/data.json');


var employees = jsonData.carshop.employees;
var carmodels= jsonData.carshop.carmodels;
var sales = jsonData.carshop.sales;


var connection = mysql.createConnection(dbconfig.connection);

employees.forEach(element => {
    connection.query('INSERT INTO `' + dbconfig.database + '`.`employees` (`name`) \
    VALUES("' + element.name + '");'
  );
});

carmodels.forEach(element => {
    connection.query('INSERT INTO `' + dbconfig.database + '`.`carmodels` (`brand`, `model`, `price`) \
    VALUES("' + element.brand + '", "' + element.brand + '", ' + element.price + ');'
  );
});

sales.forEach(element => {
    connection.query('INSERT INTO `' + dbconfig.database + '`.`sales` (`employee_id`, `carmodel_id`) \
    VALUES(' + element.employee_id + ', ' + element.carmodel_id + ');'
  );
});

console.log('Data has been successfully entered.');
connection.end();