exports.signInProcess = (context, req) => {

  req ?
    context.res = {
      "body": "!!!!!!!!!!"
    } :
    context.log.error('Fuck!')

  context.log(process.version);
  context.log(context.res.body);
  context.done();

};