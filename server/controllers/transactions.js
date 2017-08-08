const sequelize = require('../models').sequelize;
const Account = require('../models').Account;
const Transfer = require('../models').Transfer;

module.exports = {
	create(req, res) {

		return sequelize.transaction().then(t => {
			return new Promise((resolve, reject) => {
				// some validation for optimization.
				// Note: These can be made concurrent
				if (req.body.amount == 0) {
					throw new Error('0 value transaction being omitted');
				}
				if (req.body.from_user == req.body.to_user) {
					throw new Error('Self transfer being omitted');
				}
				resolve({});
			}, {
				transaction: t
			})
			.then(() => {
				return Account.findOne({
					where: {
						userid: req.body.to_user
					}
				}, {
					transaction: t
				})
				.then(toUser => {
					if (!toUser) {
						throw new Error('User ' + req.body.to_user + ' does not exist');
					}
					return toUser.update({
						balance: toUser.balance + req.body.amount
					}, {
						transaction: t
					})
					.then(toUser => {
						return Account.findOne({
							where: {
								userid: req.body.from_user
							}
						}, {
							transaction: t
						}).then(fromUser => {
							if (!toUser) {
								throw new Error('User ' + req.body.from_user + ' does not exist');
							}
							if (req.body.amount > fromUser.balance) {
								throw new Error('User ' + req.body.from_user + ' does not have enough balance');
							}
							return fromUser.update({
								balance: fromUser.balance - req.body.amount
							}, {
								transaction: t
							})
							.then(fromUser => {
								return Transfer.create({
									from_user: req.body.from_user,
									to_user: req.body.to_user,
									amount: req.body.amount
								}, {
									transaction: t
								})
							})
						})
					})
				})
			})
			.then(() => {
				t.commit();
				res.status(201).send({
					message: 'Transfer successful.'
				});

			})
			.catch(error => {
				// console.error('An error occurred:', error.message);
				t.rollback();
				res.status(400).send({
					error: error.message
				})
			});
		});

	},
};