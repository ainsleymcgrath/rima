
exports.signInProcess =  (context, req) => {

  context.res = {
    body: "!!!!!!!!!!"
  };

  context.log(process.version);
  context.log(context.res.body);
  context.done();

};