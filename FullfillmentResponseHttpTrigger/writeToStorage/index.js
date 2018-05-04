const writeToStorage = (obj, context) => {
  const { contexts,  metadata } = obj.result;
  context.bindings.tableBinding = [];

  context.bindings.tableBinding.push({
    PartitionKey: `${metadata.intentName}`,
    RowKey: obj.id,
    Data: JSON.stringify(obj.result)
  });

}

module.exports = writeToStorage;