module.exports = {
    inChannel: true,
  title: function(searchTerm) {
    return "Cases related to Defect: " + searchTerm;
  },

  query: function(searchTerm) {
    var result =
      "SELECT Id, CreatedDate, Days_Open__c, Subject , CaseNumber,	V1_Defect__c, Account_Name__c"
      + " FROM Case "
      + " WHERE V1_Defect__c LIKE '%" + searchTerm + "%'"
      + " LIMIT 10";
    return result;
  },

  attachments: function(defects) {
    var attachments = [];
    defects.forEach(function(defect) {
        var fields = [];
        fields.push({title: "Case #", value: defect.get("CaseNumber"), short:true});
        fields.push({title: "Subject", value: defect.get("Subject"), short:true});
        fields.push({title: "Account", value: defect.get("Account_Name__c"), short:true});
        fields.push({title: "Age", value: defect.get("Days_Open__c"), short:true});
        fields.push({title: "Date Opened", value: defect.get("CreatedDate"), short:true});
        attachments.push({color: "#009cdb", fields: fields});
    });
    return attachments;
  }
}
