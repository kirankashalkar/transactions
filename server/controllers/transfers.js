const Transfer = require('../models').Transfer;

module.exports = {
    create(req, res) {
        return Transfer
            .create({
                from_user: req.body.from_user,
                to_user: req.body.to_user,
                amount: req.body.amount
            })
            .then(transfer => res.status(201).send(transfer))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Transfer
            .findAll()
            .then(transfers => res.status(200).send(transfers))
            .catch(error => res.status(400).send(error));
    },
    retrieve(req, res) {
        return Transfer
            .findById(req.params.transferid)
            .then(transfer => {
                if (!transfer) {
                    return res.status(404).send({
                        message: 'Transfer Not Found',
                    });
                }
                return res.status(200).send(transfer);
            })
            .catch(error => res.status(400).send(error));
    },
};