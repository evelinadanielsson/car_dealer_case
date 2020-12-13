var DataTypes = require("sequelize").DataTypes;
var _carmodels = require("./carmodels");
var _employees = require("./employees");
var _sales = require("./sales");
var _users = require("./users");

function initModels(sequelize) {
  var carmodels = _carmodels(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);
  var sales = _sales(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  sales.belongsTo(employees, { foreignKey: "employee_id"});
  employees.hasMany(sales, { foreignKey: "employee_id"});
  sales.belongsTo(carmodels, { foreignKey: "carmodel_id"});
  carmodels.hasMany(sales, { foreignKey: "carmodel_id"});
  users.belongsTo(employees, { foreignKey: "employee_id"});
  employees.hasMany(users, { foreignKey: "employee_id"});

  return {
    carmodels,
    employees,
    sales,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
