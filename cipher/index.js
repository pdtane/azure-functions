module.exports = function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  let cipher = req.body.cipher;
  let key = req.body.key;
  let message = req.body.msg;

  let hash = {};
  for(let k in cipher) {
      let value = cipher[k];
      hash[value] = k;
  }

  let numbers = message.match(/.{1,2}(?=(.{2})+(?!.))|.{1,2}$/g) || [];
  let unencrypted = numbers.map((n) => hash[n]).join('');

  context.res =  {
      body: { 
          key: key,
          result: unencrypted
      }
  };    
  context.done();
};