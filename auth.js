var nforce = require('nforce');
var USER_NAME = process.env.USER_NAME;
var PASSWORD = process.env.PASSWORD;

var org = require('./org');

function login() {
    org.authenticate({ username: USER_NAME, password: PASSWORD}, function(err, resp) {
        if (err) {
            console.error("Authentication error");
            console.error(err);
        } else {
            console.log("Authentication successful");
        }
    });
}

exports.login = login;
