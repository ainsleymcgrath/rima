const writeToStorage = (obj, context) => {
  const {
    parameters,
    metadata
  } = obj.result;
  // TODO: change to blob storage
  
  contex.log(`Writing the following to storage:
  codename: ${parameters['CodeName']}
  intent: ${metadata['intentName']}
  points: TBD`);


  context.bindings.blobBinding = JSON.stringify({
    "codename": `${parameters['CodeName']}`,
    "intent": `${metadata['intentName']}`,
    "points": "100",
    "surveyAnswer": `${ parameters['FavoriteColorValue'] ? parameters['FavoriteColorValue'] : "" }` 
  });

}

module.exports = writeToStorage;