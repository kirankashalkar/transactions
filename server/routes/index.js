module.exports = (app) => {
	const accountsRoutes = require('./accounts')(app);
	const transfersRoutes = require('./transfers')(app);
	const transactionRoutes = require('./transactions')(app);
  
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Welcome to the Transactions API!',
	}));
};