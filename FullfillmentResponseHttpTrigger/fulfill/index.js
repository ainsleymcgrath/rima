const writeToStorage = require('../writeToStorage');
const intentLookup = require('../intentLookup');

const fulfill = (intent, obj, context) => {
  const {
    parameters,
    contexts
  } = obj.result;

  context.log(
    `Intent: ${intent}\nParameters: ${JSON.stringify(parameters)}`);
    
  // call a function to generate the response corresponding to the current intent.
  // decide whether or not that intent needs to be written to storage
  if (intentLookup[intent] == 'TestIntent' || `${intentLookup[intent]}`.indexOf('TellAbout')) {
    context.log(`Rima says: ${intentLookup[intent].response()}`);
    return intentLookup[intent].response();
  } else if (intentLookup[intent]) {
    writeToStorage(obj, context);
    context.log(`Rima says: ${intentLookup[intent].response(`${parameters['CodeName']}`)}`);
    return intentLookup[intent].response(`${parameters['CodeName']}`);
  } else {
    return 'Hmm? Not sure I caught that. Can you try again?';
  }
};

module.exports = fulfill;

