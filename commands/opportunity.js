module.exports = {
  inChannel: true,

  title: function(searchTerm) {
    return "Opportunities matching: " + searchTerm;
  },

  query: function(searchTerm) {
    var result =
      "SELECT Id, Name, Amount, Probability, StageName, CloseDate"
      + " FROM Opportunity "
      + " WHERE isClosed=false "
      + " ORDER BY amount DESC "
      + " LIMIT 5";
    return result;
  },

  attachments: function(contacts) {
    var attachments = [];
    contacts.forEach(function(contact) {
      var fields = [];
      fields.push({title: "Opportunity", value: opportunity.get("Name"), short:true});
      fields.push({title: "Link", value: "https://login.salesforce.com/" + opportunity.getId(), short:true});
      fields.push({title: "Stage", value: opportunity.get("StageName"), short:true});
      fields.push({title: "Close Date", value: opportunity.get("CloseDate"), short:true});
      fields.push({title: "Amount", value: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(opportunity.get("Amount")), short:true});
      fields.push({title: "Probability", value: opportunity.get("Probability") + "%", short:true});
      attachments.push({color: "#009cdb", fields: fields});
    });
    return attachments;
  }
}
