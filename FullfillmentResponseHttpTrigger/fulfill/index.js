const writeToStorage = require('../writeToStorage');
const intentLookup = require('../intentLookup');
const codeNames = require('./codeNames')

const fulfill = (intent, obj, context) => {
  const parameters = obj.result.parameters;

  context.log(`Intent: ${intent}\nParameters: ${JSON.stringify(parameters)}`);
    
  // call a function to generate the response corresponding to the current intent.
  // decide whether or not that intent needs to be written to storage
  if (intentLookup[intent]) {
    writeToStorage(obj, context);
    // check valid codename before responding
    return codeNames.map(n => n.toLowerCase()).includes(parameters['CodeName'].toLowerCase()) ?
      intentLookup[intent].response(parameters['CodeName'], parameters['Answer']) 
      : `That's not a real codename. I don't think I'll trust you until you try again. No funny business this time.`
  } else {
    return 'Hmm? Not sure I caught that. Can you try again?';
  }
};

module.exports = fulfill;

