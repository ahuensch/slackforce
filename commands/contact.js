module.exports = {
  inChannel: true,
  title: function(searchTerm) {
    return "Contacts matching: " + searchTerm;
  },

  query: function(searchTerm) {
    var result =
      "SELECT Id, Name, Phone, MobilePhone, Email"
      + " FROM Contact "
      + " WHERE Name LIKE '%" + searchTerm + "%'"
      + " LIMIT 5";
    return result;
  },

  attachments: function(contacts) {
    var attachments = [];
    contacts.forEach(function(contact) {
        var fields = [];
        fields.push({title: "Name", value: contact.get("Name"), short:true});
        fields.push({title: "Phone", value: contact.get("Phone"), short:true});
        fields.push({title: "Mobile", value: contact.get("MobilePhone"), short:true});
        fields.push({title: "Email", value: contact.get("Email"), short:true});
        attachments.push({color: "#009cdb", fields: fields});
    });
    return attachments;
  }
}
