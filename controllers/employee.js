const Employee = require('../models').employees;

module.exports = {
    create(req, res) {
        return Employee
        .create({
            // name: req.body.name,
            name: "Helena",
        })
        .then(employee => res.status(201).send(employee))
        .catch(error => res.status(400).send(error))
    },
};