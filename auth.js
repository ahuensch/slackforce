var nforce = require('nforce');
var USER_NAME = process.env.USER_NAME;
var PASSWORD = process.env.PASSWORD;

var org = require('./org');

module.exports = function() {
    org.authenticate({ username: USER_NAME, password: PASSWORD}, function(err, resp) {
        if (err) {
            console.error("Authentication error");
            console.error(err);
        } else {
            console.log("Authentication successful");
        }
    });
}
