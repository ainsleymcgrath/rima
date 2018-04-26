const writeToStorage = (obj, context) => {
  const {
    resolvedQuery,
    action,
    parameters,
    contexts,
    metadata
  } = obj; // TODO: refactor obj as raw req rather than stupid results obj
  
  context.bindings.tableBinding = [];

  context.bindings.tableBinding.push({
    PartitionKey: 'Test',
    RowKey: '666',
    Data: JSON.stringify([parameters, contexts, metadata])
  });
  
}

module.exports = writeToStorage;