const Sales = require('../models').sale;

module.exports = {
    create(req, res) {
        const {employee_id, carmodel_id} = req.body;
        return Sale
        .create({
            employee_id: employee_id,
            carmodel_id: carmodel_id,
        })
        .then(sale => res.status(201).send(sale))
        .catch(error => res.status(400).send(error))
    },
};