const intentLookup = require('./intents');

module.exports = (obj, context) => {

  const {
    parameters,
    metadata
  } = obj.result;
  
  contex.log(`Writing the following to storage:
  codename: ${parameters['CodeName']}
  intent: ${metadata['intentName']}
  points: ${intentLookup['intentName'].points}`);

  context.bindings.blobBinding = JSON.stringify({
    "codename": `${parameters['CodeName']}`,
    "intent": `${metadata['intentName']}`,
    "points": "100",
    "surveyAnswer": `${ parameters['FavoriteColorValue'] ? parameters['FavoriteColorValue'] : "" }` 
  });
}