const writeBlob = require('../writeBlob');
const container = process.env['AZURE_STORAGE_CONTAINER_NAME'];

const fulfill = (intent, result) => {

  const {
    resolvedQuery,
    action,
    parameters,
    contexts
  } = result;

  switch (intent) {
    case 'TestIntent':
      return `(With up so floating many bells down)`;
      break;
    case 'SignIn':
      //TODO: create a check for valid name, email
      //TODO: if `original` params are present in context, 
      //      prefer those in cases of invalid updates
      writeBlob(
        container, // always the same container
        {resolvedQuery, action, parameters, contexts}, // an object made of my favorite parts of the response
        `${resolvedQuery} ${action} ${intent}` // TODO: this is a terrible name
      )
      return `Awesome. You're signed in as ${parameters['given-name']} with email address ${parameters['email']}.
              Would you be okay with answering a few more questions?`;
      break;
    default:
      return `Something seems to have gone wrong... Please, try again.`;
      break;
  }

};

module.exports = fulfill;