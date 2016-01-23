var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var auth = require('./modules/auth');
var requireDir = require('require-dir');
var commands = requireDir('./commands');
var contact = require('./modules/contact');

app.set('port', process.env.PORT || 5000);
app.use(bodyParser.urlencoded({extended: true}));
app.post('/contact', contact.execute);
app.post('/', function (req,resp){
  if (req.body.team_id !== process.env.TEAM_ID){
    resp.send(401, "Unauthorized Access");
    return;
  }

  var name = req.body.command.replace('/','');
  commands[name](req,resp);
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
    auth.login();
});
