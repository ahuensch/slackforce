var nforce = require('nforce');
var CLIENT_ID = process.env.CLIENT_ID;
var CLIENT_SECRET = process.env.CLIENT_SECRET;
var ENVIRONMENT = process.env.ENVIRONMENT;

org = nforce.createConnection({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/oauth/_callback',
  environment: ENVIRONMENT,
  mode: 'single'
});

exports = org;
