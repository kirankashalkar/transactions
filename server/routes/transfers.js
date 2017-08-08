const transfersController = require('../controllers').transfers;

module.exports = (app) => {
	/** 
	 * Internal API for testing. Not for public consumption.
	 * Use transactions API.
	app.post('/api/transfers', transfersController.create);

	// Note: Purposely disabled because updating transfers shouldn't be allowed except to admins.
 	// app.put('/api/transfers/:userid', transfersController.update);

	 */
 	
 	app.get('/api/transfers', transfersController.list);
 	app.get('/api/transfers/:transferid', transfersController.retrieve);

}