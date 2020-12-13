const Carmodel = require('../models').carmodels;

module.exports = {
    getCarmmodels(req, res) {
        return Carmodel.findAll({
            raw: true
        })
        .then(carmodel => {
            return carmodel;
        })
    },
}