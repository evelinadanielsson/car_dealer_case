# car_dealer_case


## Prerequisites
* [Node.js and NPM](https://nodejs.org/en/)
* [MySQL](https://dev.mysql.com/downloads/installer/)

Make sure you have all dependencies by running:

## Setup
1. `npm install` to install the necessary packages.
2. Update config/database.js with your MySQL database information and uncomment the line in the .gitignore to ignore the updated config file.
3. Update some project-specific info in a few places:
  * Your project name in package.json
  * Your passport secret in app.js
4. `node scripts/dbsetup.js` to set up your database, if it doesn't already exist.
5. `node scripts/dbenterdata.js` to enter initial data into the database, if it doesn't already exist.
6. `npm start dev` to start up your app! Go to [http://localhost:5000](http://localhost:5000) to see it.
