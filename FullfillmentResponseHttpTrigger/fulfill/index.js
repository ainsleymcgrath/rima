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
    // Thanks, E.E. Cummings
    case 'TestIntent':
      return `(With up so floating many bells down)`;
      break;
    
    // Earn points at Aptitive booths
    case 'VisitIoTea':
      writeToStorage(obj, context);
      return `Congratulations, ${parameters['CodeName']}! You just earned 100 points.`;

    case 'VisitRobotRace':
      return `Well played, human. 100 points for ${parameters['CodeName']}!`;
      break;

    case 'VisitRima':
      return `Good job! That's 100 points for you,${parameters['CodeName']}.`;
      break;

    case 'VisitSnakes':
      return `Way to go, ${parameters['CodeName']}! 100 points for you!`;
      break;

    case 'VisitPlumbing':
      return `Wow. You figured out the puzzle. 100 points for ${parameters['CodeName']}!`;
      break;

    case 'VisitScoreboard':
      return `Excellent work, ${parameters['CodeName']}. That's 100 points coming your way.`;
      break;

    // Earn points at Partner booths
    case 'VisitPinnacle':
      return `OMG! You just earned 250 points, ${parameters['CodeName']}!`;
      break;

    case 'VisitBigSquid':
      return `Holy cow, you're good at this game, ${parameters['CodeName']}. Here, have 250 points.`;
      break;

    case 'VisitAttunity':
      return `You just earned yourself 250 points, ${parameters['CodeName']}.`;
      break;

    case 'VisitLooker':
      return `Is that you, ${parameters['CodeName']}? You look like you need 250 points.`;
      break;

    case 'VisitMicrosoft':
      return `WOOHOO! You got the big one! ONE THOUSAND POINTS for ${parameters['CodeName']}!!!`;
      break;

    case 'VisitFivetran':
      return `You're certainly making your way around the science fair! 250 points for you, ${parameters['CodeName']}.`;
      break;

    case 'VisitSnowflake':
      return `Impressive work, ${parameters['CodeName']}. Have 250 points.`;
      break;

    // Survey questionsf or Analytics
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

    // Learn about the booths
  }

};

module.exports = fulfill;