# Getting started:
* Run the circle postgres SQL DB docker image as noted in the questionnaire.
* Install Node and NPM. Since I use ES6, you'll need Node version > 5.
	* I recommend using brew to install Node on Mac OSX. If you wish to use multiple versions of Node, use n
* Install sequelize globally:
	* npm install -g sequelize-cli
* Install NPM dependencies:
	* At top-level, run npm install
* Initialize database schema:
	* sequelize db:migrate
* Run the server:
	* Development mode:
		* npm run start:dev
	* Production mode:
		* export NODE_ENV="production"
		* node bin/www


Note: The server runs on port 8000 by default. To change it, set the environment variable PORT to something else.

# APIs:
* *Accounts*
	* POST /api/accounts - Create a new account. req.body should be JSON with the following attributes: userid (string) and balance (int)
	* GET /api/accounts - Get all accounts
	* GET /api/accounts/<userid> - Get a particular account's details
	* PUT /api/accounts/<userid> - Update the balance of a particular account. req.body should be JSON with the following attribute: balance (int)

* *Transactions*
	* POST /api/transactions - Create a transaction. Does verifications and commits only if all operations are successful. req.body should be JSON with the following attributes: from_user (string), to_user (string), amount (int). These are self-explanatory.
	* GET /api/transactions - Get all transfers that were made in the system. Also an alias to api/transfers
	* GET /api/transactions/<transferid> - Get a particular transfer. Also an alias to api/transfers/<transferid>

## Suggested improvements:
* Enhance tranfers to save operation status and details
* Running queries concurrently in transactions
* Write automated tests


