const azure = require('azure-storage');

const writeBlob = (container, obj, blobName) => {
  const blobService = azure.createBlobService(
    process.env['AZURE_STORAGE_ACCOUNT_NAME'],
    process.env['AZURE_ACCOUNT_KEY']
  );

  blobService.createBlockBlobFromText(
    container,
    blobName,
    `${obj}`,
    (error, result) => {
      if (err) {
        context.log(`Yikes there was an error:
                    ${error}`) 
      }

      context.log(`Successfully wrote blob:
                  ${result}`)
    }
  )
}

module.exports = writeBlob;