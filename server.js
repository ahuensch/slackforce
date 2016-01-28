var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Setup App
var auth = require('./commands/auth');
var run = require('./commands/command-runner');

app.set('port', process.env.PORT || 5000);
app.use(bodyParser.urlencoded({extended: true}));


// Setup Commands
var requireDir = require('require-dir');
var commands = requireDir('./commands');

app.post('/', function (req,resp){
  if (req.body.team_id !== process.env.TEAM_ID){
    resp.send(401, "Unauthorized Access");
    return;
  }

  // Execute specified command
  var name = req.body.command.replace('/','');
  var command = commands[name]
  run(req, resp, command);
});


// Run Server
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
    auth.login();
});
