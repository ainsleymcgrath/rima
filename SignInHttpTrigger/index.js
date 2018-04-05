const fulfill = require('./fulfill')
exports.signInProcess = (context, req) => {

  if (req) {

    const intent = req.result.metadata.intentName
    const {
      resolvedQuery,
      action,
      parameters,
      contexts
    } = req.result

    context.log(`
      Query: ${resolvedQuery}
      Action: ${action}
      Params: ${JSON.stringify(parameters)}
      Contexts: ${JSON.stringify(contexts)}
    `)

    context.res
      .status(200)
      .json({
        "speech": fulfill(intent, req.result),
        "displayText": fulfill(intent, req.result)
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