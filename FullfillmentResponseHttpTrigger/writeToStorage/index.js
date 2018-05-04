const writeToStorage = (obj, context) => {
  const { contexts, metadata } = obj.result; 
  context.bindings.tableBinding = [];

  context.bindings.tableBinding.push({
    PartitionKey: `${metadata.intentName}-${contexts}`,
    RowKey: obj.id,
    Data: JSON.stringify(obj.result)
  });
  
}

module.exports = writeToStorage;