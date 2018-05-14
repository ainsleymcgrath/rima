const intentLookup = require('../intentLookup');

const writeToStorage = (obj, context) => {

  const {
    parameters,
    metadata
  } = obj.result;
  
  context.log(
    `Writing the following to storage:
    codename: ${parameters['CodeName']}
    intent: ${metadata['intentName']}
    points: ${intentLookup[metadata['intentName']].points}`);

  context.bindings.blobBinding = JSON.stringify({
    "codename": `${parameters['CodeName']}`,
    "intent": `${metadata['intentName']}`,
    "points": "100",
    "surveyAnswer": `${ parameters['FavoriteColorValue'] ? parameters['FavoriteColorValue'] : "" }` 
  });
}

module.exports = writeToStorage;