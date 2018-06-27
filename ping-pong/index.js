module.exports = function (context, req) {

  context.res = {
      body: { pong: req.body.ping }
  };

  context.done();
};