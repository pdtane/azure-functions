module.exports = function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  context.log(req.body);

  /*if (req.query.name || (req.body && req.body.name)) {
      context.res = {
          // status: 200, /* Defaults to 200 
          body: { pong: req.body.ping }
      };
  }
  else {
      context.res = {
          status: 400,
          body: "Please pass a name on the query string or in the request body"
      };
  } */
  context.res = {
      body: { pong: req.body.ping }
  };

  context.done();
};