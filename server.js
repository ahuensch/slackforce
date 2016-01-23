var express = require('express'),
    bodyParser = require('body-parser'),
    auth = require('./modules/auth'),
    contact = require('./modules/contact'),
    opportunity = require('./modules/opportunity'),
    _case = require('./modules/case'),
    database = require('./modules/database'),
    app = express();

app.set('port', process.env.PORT || 5000);

app.use(bodyParser.urlencoded({extended: true}));

app.post('/pipeline', opportunity.execute);
app.post('/contact', contact.execute);
app.post('/case', _case.execute);
app.post('/db', database.execute);
app.post('/testget', execute);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
    auth.login();
});
function execute (req, resp){
  if (req.body.team_id !== process.env.TEAM_ID){
    res.send("Unauthorized Access");
    return;
  }
  resp.json({text:"it works " + req.body.team_id + " " + req.body.token + " " + req.body.command + " " + req.body.response_url + " " + req.body.channel_name + " " + req.body.team_domain});
}
