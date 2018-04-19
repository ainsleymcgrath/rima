const azure = require('azure-storage');

const writeToStorage = (obj) => {
  const {
    resolvedQuery,
    action,
    parameters,
    contexts,
    metadata
  } = obj;
  const tableService = azure.createTableService(
    process.env['AZURE_STORAGE_ACCOUNT_NAME'],
    process.env['AZURE_ACCOUNT_KEY']);
  const entGen = azure.TableUtilities.entityGenerator;

  const entity = {
    PartitionKey: entGen.String('Test'),
    RowKey: entGen.String('666'),
    Data: entGen.String(JSON.stringify([parameters, contexts, metadata]))
  };

  tableService.insertEntity('AdsfBotTableStorage', entity, (err) => err);
  
}

module.exports = writeToStorage;


// {
//   "id": "6a087bb6-c18d-4199-b594-f2a41c989b4a",
//   "timestamp": "2018-04-19T19:24:08.722Z",
//   "lang": "en",
//   "result": {
//     "source": "agent",
//     "resolvedQuery": "NEW YORK BITCH",
//     "action": "SignIn.SignIn-yes",
//     "actionIncomplete": false,
//     "parameters": {
//       "Home": "NEW YORK BITCH",
//       "Occupation": "eat ass",
//       "WorkPlace": "the zone"
//     },
//     "contexts": [
//       {
//         "name": "signin-followup",
//         "parameters": {
//           "Occupation.original": "eat ass",
//           "Occupation": "eat ass",
//           "email.original": "asshat@ass.com",
//           "Home.original": "NEW YORK BITCH",
//           "WorkPlace.original": "the zone",
//           "any.original": "Ass Hat",
//           "Home": "NEW YORK BITCH",
//           "WorkPlace": "the zone",
//           "any": "Ass Hat",
//           "email": "asshat@ass.com"
//         },
//         "lifespan": 1
//       },
//       {
//         "name": "sign_in_and_survey",
//         "parameters": {
//           "Occupation.original": "eat ass",
//           "Occupation": "eat ass",
//           "email.original": "asshat@ass.com",
//           "Home.original": "NEW YORK BITCH",
//           "WorkPlace.original": "the zone",
//           "any.original": "Ass Hat",
//           "Home": "NEW YORK BITCH",
//           "WorkPlace": "the zone",
//           "any": "Ass Hat",
//           "email": "asshat@ass.com"
//         },
//         "lifespan": 4
//       }
//     ],
//     "metadata": {
//       "intentId": "7333c183-ba31-42c6-a6e9-091fdddedab7",
//       "webhookUsed": "false",
//       "webhookForSlotFillingUsed": "false",
//       "intentName": "SignIn - UserSaysYesToExtraQuestions"
//     },
//     "fulfillment": {
//       "speech": "",
//       "messages": [
//         {
//           "type": 0,
//           "speech": ""
//         }
//       ]
//     },
//     "score": 1
//   },
//   "status": {
//     "code": 200,
//     "errorType": "success",
//     "webhookTimedOut": false
//   },
//   "sessionId": "93255e63-003c-48a4-b712-5df8b46e49e7"
// }