const writeToStorage = require('../writeToStorage');

const fulfill = (intent, obj, context) => {

  const {
    resolvedQuery,
    action,
    parameters,
    contexts
  } = obj.result; 

  switch (intent) {
    case 'TestIntent':
      return `(With up so floating many bells down)`;
      break;

    case 'SignIn':
      //TODO: create a check for valid name, email
      //      if `original` params are present in context, 
      //      prefer those in cases of invalid updates
    
      // context.log(`${blobService}, ${typeof blobService}`)
      writeToStorage(obj, context);
      return `Awesome. You're signed in as ${parameters['name']} with email address ${parameters['email']}.
              Would you be okay with answering a few more questions?`;
      break;

    case 'SignIn - Followup':
      writeToStorage(obj, context);
      return `Thanks for that. You're helping make the (data) Science Fair even cooler!`
      break;

    default:
      return `Something seems to have gone wrong... Please, try again.`;
      break;
  }

};

module.exports = fulfill;