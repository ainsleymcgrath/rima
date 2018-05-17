const writeToStorage = require('../writeToStorage');
const intentLookup = require('../intentLookup');

const fulfill = (intent, obj, context) => {
  const parameters = obj.result.parameters;

  context.log(`Intent: ${intent}\nParameters: ${JSON.stringify(parameters)}`);
    
  // call a function to generate the response corresponding to the current intent.
  // decide whether or not that intent needs to be written to storage
  if (intentLookup[intent]) {
    writeToStorage(obj, context);
    return intentLookup[intent].response(parameters['CodeName'], parameters['Answer']);
  } else {
    return 'Hmm? Not sure I caught that. Can you try again?';
  }
};

module.exports = fulfill;

