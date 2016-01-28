var org = require('./org');

function execute(req, res, command) {
  var searchTerm = req.body.text;
  var q = command.query(searchTerm);

  org.query({query: q}, function(err, resp) {
      if (err) {
          console.error(err);
          res.send("An error in the sales force query has occurred");
          return;
      }

      if (resp.records === null || resp.records.length === 0)  {
        res.send("No records");
        return;
      }

      var title = command.title(searchTerm);
      var attachments = command.attachments(resp.records);
      var response_type = command.inChannel ? 'in_channel' : 'ephemeral';

      res.json({
        response_type: response_type,
        text: title,
        attachments: attachments
      });

  });
}

exports.execute = execute;
