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
    PartitionKey: `${meatadata.intentName}-${context}`,
    RowKey: obj.id,
    Data: JSON.stringify(obj.result)
  });
  
}

module.exports = writeToStorage;