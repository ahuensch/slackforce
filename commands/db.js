
module.exports = {
  title: function(searchTerm) {
    return "Application Databases matching: " + searchTerm;
  },

  query: function(searchTerm) {
    var result =
      "SELECT Id, Org_PIN_DB__c, SQL_Server_Name__c, SQL_Database_Name__c ,Name, Account_Name__c"
      + " FROM Application_Database__c "
      + " WHERE Name LIKE '%" + searchTerm + "%'"
      + " OR Account_Name__c LIKE '%" + searchTerm + "%'"
      + " OR SQL_Database_Name__c LIKE '%" + searchTerm + "%'"
      + " LIMIT 5";
    console.log(result);
    return result;
  },

  attachments: function(databases) {
    var attachments = [];
    databases.forEach(function(database) {
        var fields = [];
        fields.push({title: "Org Pin", value: database.get("Org_PIN_DB__c"), short:true});
        fields.push({title: "Database Name", value: database.get("SQL_Database_Name__c"), short:true});
        fields.push({title: "Account Name", value: database.get("Account_Name__c"), short:true});
        fields.push({title: "Server Name", value: database.get("SQL_Server_Name__c"), short:true});
        attachments.push({color: "#009cdb", fields: fields});
    });
    return attachments;
  }
}
