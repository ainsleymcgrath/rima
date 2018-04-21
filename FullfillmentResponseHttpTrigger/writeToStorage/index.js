const azure = require('azure-storage');

const writeToStorage = (obj) => {
  const {
    resolvedQuery,
    action,
    parameters,
    contexts,
    metadata
  } = obj; // TODO: refactor obj as raw req rather than stupid results obj

  console.time();
  const tableService = azure.createTableService(
    process.env['AZURE_STORAGE_ACCOUNT_NAME'],
    process.env['AZURE_ACCOUNT_KEY']);
  console.timeEnd();
    
  const entGen = azure.TableUtilities.entityGenerator;

  // const entity = {
  //   PartitionKey: entGen.String('Test'),
  //   RowKey: entGen.Double('666'),
  //   Data: entGen.String(JSON.stringify([parameters, contexts, metadata]))
  // };

  // tableService.insertEntity('AdsfBotTableStorage', entity, (error, result, response) => {
  //   if (err) {
  //     // bleh
  //   }
  // });
  
}

module.exports = writeToStorage;