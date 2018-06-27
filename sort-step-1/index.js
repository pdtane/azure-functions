module.exports = function (context, req) {
  if (req.body && req.body.key && req.body.ArrayOfValues) {
      context.bindings.outputTable = { 
          PartitionKey: 'MyPartitionKey',
          RowKey: req.body.key,
          ArrayOfValues: req.body.ArrayOfValues
      }
      context.res = {
          body: {}
      }
  }
  else {
      context.res = {
          status: 400,
          body: "Please pass a key and ArrayOfValues parameters"
      };
  }
  context.done();
};