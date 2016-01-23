var org = require('./auth').org;
var TOKEN = process.env[token_name];

function execute(req, res) {

    if (req.body.token != TOKEN) {
        res.send("Invalid token");
        return;
    }

    var q = query;

    org.query({query: q}, function(err, resp) {
        if (err) {
            console.error(err);
            res.send("An error as occurred");
            return;
        }

        if (resp.records === null || resp.records.length === 0)  {
          res.send("No records");
          return;
        }

        var records = resp.records;
        var attachments = [];
        records.forEach(function(record) {
            var fields = [];
            fields.push({title: "Org Pin", value: record.get("Org_PIN_DB__c"), short:true});
            fields.push({title: "record Name", value: record.get("SQL_record_Name__c"), short:true});
            fields.push({title: "Account Name", value: record.get("Account_Name__c"), short:true});
            fields.push({title: "Server Name", value: record.get("SQL_Server_Name__c"), short:true});
            attachments.push({color: "#009cdb", fields: fields});
        });
        res.json({text: "Application matching '" + req.body.text + "':", attachments: attachments});


    });
}

exports.execute = execute;
