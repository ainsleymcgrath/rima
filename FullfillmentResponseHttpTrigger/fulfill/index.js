// const writeBlob = require('../writeBlob');
const cont = process.env['AZURE_STORAGE_CONTAINER_NAME'];
const azure = require('azure-storage');

const fulfill = (intent, result) => {

  const {
    resolvedQuery,
    action,
    parameters,
    contexts
  } = result;

  const blobService = azure.createBlobService(
    process.env['AZURE_STORAGE_ACCOUNT_NAME'],
    process.env['AZURE_ACCOUNT_KEY']
  );

  switch (intent) {
    case 'TestIntent':
      return `(With up so floating many bells down)`;
      break;

    case 'SignIn':
      //TODO: create a check for valid name, email
      //TODO: if `original` params are present in context, 
      //      prefer those in cases of invalid updates
    
      // context.log(`${blobService}, ${typeof blobService}`)
      blobService.createBlockBlobFromText(
        cont,
        `query-${resolvedQuery}_action-${action}`,
        `${result}`,
        (err, result) => {
          if (err) {
            context.log(`Yikes there was an error: \n ${error}`) 
          }
        });
      
      return `Awesome. You're signed in as ${parameters['given-name']} with email address ${parameters['email']}.
              Would you be okay with answering a few more questions?`;
      break;

    default:
      return `Something seems to have gone wrong... Please, try again.`;
      break;
  }

};

module.exports = fulfill;

const blobService = azure.createBlobService(
  'aptdwstorage',
  'X/beSSOwkwX4wWm8K87VFKlxqHPndLiGx6hUxT3De0eejwZxOS0LR/nGiuZslbMM4Pj+sO0vUYyj6Rh33gnFwA=='
);