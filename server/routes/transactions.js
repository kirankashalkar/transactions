const transactionsController = require('../controllers').transactions;
const transfersController = require('../controllers').transfers;

module.exports = (app) => {
	app.post('/api/transactions', transactionsController.create);
 	app.get('/api/transactions', transfersController.list);
 	app.get('/api/transactions/:transactionid', transfersController.retrieve);
}