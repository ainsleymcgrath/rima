require('dotenv').config();
const azure = require('azure-storage');
const blobService = azure.createBlobService(
    process.env.AZURE_STORAGE_ACCOUNT_NAME,
    process.env.AZURE_ACCOUNT_KEY
);
