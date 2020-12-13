const Employee = require('../models').employees;

module.exports = {
    getEmployees(req, res) {
        return Employee.findAll()
        .then(employee => {
            //console.log(employee);
            return employee;
        })
    },

    // getEmployees(req, res) {
    //     Employee.findAll().then(employee => {
    //         //return users;
    //      console.log(employee);
    // });
    // },
};


