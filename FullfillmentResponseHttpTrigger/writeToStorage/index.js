const writeToStorage = (obj, context) => {
  const {
    parameters,
    metadata
  } = obj.result;
  // TODO: change to blob storage

  context.bindings.blobBinding = JSON.stringify({
    "codename": `${parameters['CodeName']}`,
    "intent": `${metadata['intentName']}`,
    "points": "100"
  });

}

module.exports = writeToStorage;