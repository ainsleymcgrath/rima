const writeToStorage = require('../writeToStorage');
const intentLookup = require('../intentLookup');
const codeNames = require('./codeNames')

const fulfill = (intent, obj, context) => {
  const parameters = obj.result.parameters;

  context.log(`Intent: ${intent}\nParameters: ${JSON.stringify(parameters)}`);

  // call a function to generate the response corresponding to the current intent.
  // decide whether or not that intent needs to be written to storage
  if (intentLookup[intent]) {
    // only write Visit and Answer intents to storage
    if (intent.includes('Visit') || intent.includes('Answer')) {
      writeToStorage(obj, context);
    }

    if (parameters['CodeName']) {
      return codeNames.map(n => n.toLowerCase()).includes(parameters['CodeName'].toLowerCase()) ?
        // if valid codename....
        intentLookup[intent].response(parameters['CodeName'], parameters['Answer'])
        // otherwise...
        :
        `That's not a real codename. I don't think I'll trust you until you try again. No funny business this time.`
    }
    // returns in all cases of non-TellAbout
    return intentLookup[intent].response()

  } else {
    // TODO raise Exception() + create error function
    return 'Hmm? Not sure I caught that. Can you try again?';
  }
};

module.exports = fulfill;