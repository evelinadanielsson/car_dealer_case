const Carmodel = require('../models').carmodels;

module.exports = {
    create(req, res) {
        const {brand, model, price} = req.body;
        return Carmodel
        .create({
            brand: brand,
            model: model,
            price: price,
        })
        .then(carmodel => res.status(201).send(carmodel))
        .catch(error => res.status(400).send(error))
    },
};