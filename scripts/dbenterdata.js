var mysql    = require('mysql');
var dbconfig = require('../config/database');
var jsonData = require('../config/data.json');


var carshop = jsonData.carshop;



var connection = mysql.createConnection(dbconfig.connection);

carshop.employees.forEach(element => {
    connection.query('INSERT INTO `' + dbconfig.database + '`.`employees` (`name`) \
    VALUES("' + element.name + '");'
  );
});

carshop.carmodels.forEach(element => {
    connection.query('INSERT INTO `' + dbconfig.database + '`.`carmodels` (`brand`, `model`, `price`) \
    VALUES("' + element.brand + '", "' + element.brand + '", ' + element.price + ');'
  );
});

carshop.sales.forEach(element => {
    connection.query('INSERT INTO `' + dbconfig.database + '`.`sales` (`employee_id`, `carmodel_id`) \
    VALUES(' + element.employee_id + ', ' + element.carmodel_id + ');'
  );
});

console.log('Data has been successfully entered.');
connection.end();