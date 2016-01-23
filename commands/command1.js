var org = require('../modules/auth').org;

module.exports = function(req, resp){

  result.send("It Works");

//   var q = "SELECT Id, Org_PIN_DB__c, SQL_Server_Name__c, SQL_Database_Name__c ,Name, Account_Name__c FROM Application_Database__c "
//   +"WHERE Name LIKE '%"+req.body.text+"%' OR Account_Name__c LIKE '%"+req.body.text+"%' OR SQL_Database_Name__c LIKE '%"+req.body.text+"%' LIMIT 5";
//
//   org.query({query: q}, function(err, resp) {
//       if (err) {
//           console.error(err);
//           res.send("An error as occurred");
//           return;
//       }
//       if (resp.records && resp.records.length>0) {
//           var databases = resp.records;
//           var attachments = [];
//           databases.forEach(function(database) {
//               var fields = [];
//               fields.push({title: "Org Pin", value: database.get("Org_PIN_DB__c"), short:true});
//               fields.push({title: "Database Name", value: database.get("SQL_Database_Name__c"), short:true});
//               fields.push({title: "Account Name", value: database.get("Account_Name__c"), short:true});
//               fields.push({title: "Server Name", value: database.get("SQL_Server_Name__c"), short:true});
//               attachments.push({color: "#009cdb", fields: fields});
//           });
//           res.json({text: "Application Databases matching '" + req.body.text + "':", attachments: attachments});
//       } else {
//           res.send("No records");
//       }
//   });
//
 }
