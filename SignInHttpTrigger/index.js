exports.signInProcess = (context, req) => {

  response = "!!!!!!!!"

  if (req) {
    // const data = JSON.parse(req.body); //.result.metadata['intentName']
    context.log(typeof req);
    context.log(typeof req.body);
    context.res
      .status(200)
      .json({
        "speech": response,
        "displayText": response
      });
  } else {
    context.res
      .status(400)
      .send("You suck, this is an error haha");
    context.log.error('Fuck!');
  }

  // context.log(process.version);
  // context.log(context.res.body);

};