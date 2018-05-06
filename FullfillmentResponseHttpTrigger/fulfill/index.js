const writeToStorage = require('../writeToStorage');

const fulfill = (intent, obj, context) => {

  const {
    parameters,
    contexts
  } = obj.result;

  // Used as a lookup to get the correct text response for 
  // each intent. Handles the game and signin. Another module
  // handles intents that have non-plaintext payloads.
  switch (intent) {
    case 'TestIntent':
      return `(With up so floating many bells down)`;
      break;

    case 'VisitIoTea':
      return `Congratulations, ${parameters['CodeName']}! You just earned 100 points.`

    case 'VisitRobotRace':
      return `Well played, human. 100 points for ${parameters['CodeName']}!`;
      break;

    case 'VisitRima':
      return `${parameters['CodeName']}`;
      break;

    case 'VisitSnakes':
      return `${parameters['CodeName']}`;
      break;

    case 'VisitPlumbing':
      return `${parameters['CodeName']}`;
      break;

    case 'VisitScoreboard':
      return `${parameters['CodeName']}`;
      break;

    case 'VisitPinnacle':
      return `${parameters['CodeName']}`;
      break;

    case 'VisitBigSquid':
      return `${parameters['CodeName']}`;
      break;

    case 'VisitAttunity':
      return `${parameters['CodeName']}`;
      break;

    case 'VisitLooker':
      return `${parameters['CodeName']}`;
      break;

    case 'VisitMicrosoft':
      return `${parameters['CodeName']}`;
      break;

    case 'VisitFivetran':
      return `${parameters['CodeName']}`;
      break;

    case 'VisitSnowflake':
      return `${parameters['CodeName']}`;
      break;

    case 'AnswerFavoriteColorQuestion':
      return `${parameters['CodeName']}`;
      break;

    case 'AnswerLeastFavoriteColorQuestion':
      return `${parameters['CodeName']}`;
      break;

    case 'AnswerGender':
      return `${parameters['CodeName']}`;
      break;

    case 'AnswerAgeRange':
      return `${parameters['CodeName']}`;
      break;

  }

};

module.exports = fulfill;