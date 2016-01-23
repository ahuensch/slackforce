var requireDir = require('require-dir');
var commands = requireDir('./commands');

var express = require('express'),
    bodyParser = require('body-parser'),
    auth = require('./modules/auth'),
    contact = require('./modules/contact'),
    opportunity = require('./modules/opportunity'),
    _case = require('./modules/case'),
    app = express();

app.set('port', process.env.PORT || 5000);

app.use(bodyParser.urlencoded({extended: true}));

app.post('/pipeline', opportunity.execute);
app.post('/contact', contact.execute);
app.post('/case', _case.execute);
app.post('/', execute);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
    auth.login();
});
function execute (req, resp){
  if (req.body.team_id !== process.env.TEAM_ID){
    resp.send(401, "Unauthorized Access");
    return;
  }
resp.send("blah")
  //commands[req.body.command.replace('/','')].module(req,resp);
  //resp.json({text:"it works " + req.body.team_id + " " + req.body.token + " " + req.body.command + " " + req.body.response_url + " " + req.body.channel_name + " " + req.body.team_domain});
}
