const intentLookup = require('../intentLookup');

const writeToStorage = (obj, context) => {
  const {
    parameters,
    metadata
  } = obj.result;
  const intent = metadata['intentName'];
  
  if (intent.includes('SignIn')) {
    // generate the list of attendees
    context.bindings.blobBinding = JSON.stringify({
      intent: `${ intent }`,
      name: `${ parameters['Name']} `,
      email: `${ parameters['Email'] }`
    });
  } else {
    context.bindings.blobBinding = JSON.stringify({
      codename: `${ parameters['CodeName'] ? parameters['CodeName'] : "" }`,
      intent: `${ intent }`,
      points: `${ intentLookup[intent].points ? intentLookup[intent].points : 0 }`,
      surveyAnswer: `${ parameters['Answer'] ? parameters['Answer'] : "" }` 
    });
  }
  
  
};

module.exports = writeToStorage;