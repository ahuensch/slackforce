var org = require('./auth').org;

function execute(req, res, command) {
  var searchTerm = req.body.text;
  var q = command.query(searchTerm);

  org.query({query: q}, function(err, resp) {
      if (err) {
          console.error(err);
          res.send("An error has occurred");
          return;
      }

      if (resp.records === null || resp.records.length === 0)  {
        res.send("No records");
        return;
      }

      var title = command.title(searchTerm);
      var attachments = command.attachments(resp.records);

      res.json({
        text: title,
        attachments: attachments
      });
      
  });
}

exports.execute = execute;
