const accountsController = require('../controllers').accounts;

module.exports = (app) => {
	app.post('/api/accounts', accountsController.create);
	app.get('/api/accounts', accountsController.list);
	app.get('/api/accounts/:userid', accountsController.retrieve);
	app.put('/api/accounts/:userid', accountsController.update);
}