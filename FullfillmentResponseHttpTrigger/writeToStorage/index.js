const writeToStorage = (obj, context) => {
  const {
    resolvedQuery,
    action,
    parameters,
    contexts,
    metadata
  } = obj.result; 
  
  context.bindings.tableBinding = [];

  context.bindings.tableBinding.push({
    PartitionKey: 'Test',
    RowKey: '777',
    Data: JSON.stringify([parameters, contexts, metadata])
  });
  
}

module.exports = writeToStorage;