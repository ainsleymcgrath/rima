const writeToStorage = (obj, context) => {
  const {
    resolvedQuery,
    action,
    parameters,
    contexts,
    metadata
  } = obj; // TODO: refactor obj as raw req rather than stupid results obj
  
  // context.tableBinding.push({
  //   PartitionKey: 'Test',
  //   RowKey: '666',
  //   Data: entGen.String(JSON.stringify([parameters, contexts, metadata]))
  // });
  
}

module.exports = writeToStorage;