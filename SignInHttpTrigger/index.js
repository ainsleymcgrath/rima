const fulfillmentResponse = require('./fulfillmentResponse')

exports.signInProcess = (context, req) => {

  if (req) {
    // const data = JSON.parse(req.body); //.result.metadata['intentName']
    context.log(Object.keys(req));
    const intent = req.result.metadata.intentName

    context.res
      .status(200)
      .json({
        "speech": fulfillmentResponse(intent),
        "displayText": fulfillmentResponse(intent)
      });
  } else {
    context.res
      .status(400)
      .json({
        "speech": `Some kind of error occured. Server stuff. Let's give this another shot?`,
        "displayText": `Some kind of error occured. Server stuff. Let's give this another shot?`
      })
    context.log.error(`Error occurred for fulfillment of intent ${intent}`);
  }

};