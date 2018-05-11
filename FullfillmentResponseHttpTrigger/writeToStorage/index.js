const writeToStorage = (obj, context) => {
  const {
    parameters,
    metadata
  } = obj.result;
  // TODO: change to blob storage

  context.bindings.blobBinding = {
    "codename": `${parameters['CodeName']}`,
    "intent": `${metadata['intentName']}`,
    "points": "100"
  }

  context.done();
}

module.exports = writeToStorage;