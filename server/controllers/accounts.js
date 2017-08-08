const Account = require('../models').Account;

module.exports = {
	create(req, res) {
		return Account
			.create({
				userid: req.body.userid,
				balance: req.body.balance
			})
			.then(account => res.status(201).send(account))
			.catch(error => res.status(400).send(error));
	},
	list(req, res) {
		return Account
			.findAll()
			.then(accounts => res.status(200).send(accounts))
			.catch(error => res.status(400).send(error));
	},
	retrieve(req, res) {
		return Account
			.findById(req.params.userid)
			.then(account => {
				if (!account) {
					return res.status(404).send({
						message: 'Account Not Found',
					});
				}
				return res.status(200).send(account);
			})
			.catch(error => res.status(400).send(error));
	},
	update(req, res) {
		return Account
			.findById(req.params.userid)
			.then(account => {
				if (!account) {
					return res.status(404).send({
						message: 'Account Not Found',
					});
				}
				return account
					.update({
						balance: req.body.balance || account.balance,
					})
					.then(() => res.status(200).send(account))
					.catch((error) => res.status(400).send(error));
			})
			.catch((error) => res.status(400).send(error));
	},
};