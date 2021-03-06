const fulfill = require('./fulfill')

module.exports = (context, req) => {
  if (req) {
    const intent = req.result.metadata.intentName
    
    context.res
      .status(200)
      .json({
        "speech": fulfill(intent, req, context),
        "displayText": fulfill(intent, req, context)
      });
  } else {
    context.res
      .status(400)
      .json({
        "speech": `Some kind of error occured. Server stuff. Let's give this another shot?`,
        "displayText": `Some kind of error occured. Server stuff. Let's give this another shot?`
      });

    context.log.error(`Error occurred for fulfillment of intent ${intent}`);
  }
};