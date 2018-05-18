const intentLookup = require('../intentLookup');

const writeToStorage = (obj, context) => {
  const {
    parameters,
    metadata
  } = obj.result;
  
  context.log(
    `Writing the following to storage:
    codename: ${ parameters['CodeName'] }
    intent: ${ metadata['intentName'] }
    points: ${ intentLookup[metadata['intentName']].points }
    surveyAnswer: ${ parameters['Answer'] ? parameters['Answer'] : "n/a" }`);

  context.bindings.blobBinding = JSON.stringify({
    codename: `${ parameters['CodeName'] ? parameters['CodeName'] : "" }`,
    intent: `${ metadata['intentName'] }`,
    points: `${ intentLookup[metadata['intentName']].points ? intentLookup[metadata['intentName']].points : 0 }`,
    surveyAnswer: `${ parameters['Answer'] ? parameters['Answer'] : "" }` 
  });
};

module.exports = writeToStorage;