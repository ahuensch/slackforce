var org = require('./auth').org;

module.exports = function(req, resp){

  var q = "SELECT Id, Org_PIN_DB__c, SQL_Server_Name__c, SQL_Database_Name__c ,Name, Account_Name__c FROM Application_Database__c LIMIT 5";

  org.query({query: q}, function(err, result) {
    resp.send("Query Executed!");
  });

  //resp.send("It Works");
}
