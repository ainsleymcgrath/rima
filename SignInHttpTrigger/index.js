exports.signInProcess = (context, req) => {

  resposne = "!!!!!!!!"
  
  req ?
    context.res = {
      "body": {
        "speech": response, 
        "displayText": response 
      }
    } :
    context.log.error('Fuck!')

  context.log(process.version);
  context.log(context.res.body);
  context.done();

};