const writeToStorage = (obj, context) => {
  const {
    contexts,
    metadata
  } = obj.result;
  // TODO: change to blob storage
  context.bindings.tableBinding = [];

  context.bindings.tableBinding.push({
    PartitionKey: `${metadata.intentName}`,
    RowKey: obj.id,
    Data: JSON.stringify(obj.result)
  });

}

module.exports = writeToStorage;