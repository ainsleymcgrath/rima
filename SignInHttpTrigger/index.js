exports.signInProcess = (context, req) => {

  resposne = "!!!!!!!!"
  
  if (req) {
    context.log(req.body);

    context.res = {
      "body": {
        "speech": response, 
        "displayText": response 
      }
    } 
  } else {
    context.log.error('Fuck!')
  } 

  // context.log(process.version);
  // context.log(context.res.body);
  context.done();

};