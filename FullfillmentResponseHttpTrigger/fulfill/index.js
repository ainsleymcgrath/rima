const writeToStorage = require('../writeToStorage');

const fulfill = (intent, obj, context) => {

  const {
    parameters,
    contexts
  } = obj.result;

  switch (intent) {
    case 'TestIntent':
      return `(With up so floating many bells down)`;
      break;

    case 'SignIn':
      writeToStorage(obj, context);
      return `Awesome. You're signed in as ${parameters['name']} with email address ${parameters['email']}.
              Would you be okay with answering a few more questions?`;
      break;

    case 'SignIn - UserSaysYesToExtraQuestions':
    case 'AnswerExtraQuestionsOutOfContext':
      writeToStorage(obj, context);
      return `Thanks for that. You're helping make the (data) Science Fair even cooler!`;
      break;

    case 'VisitIoTea':
      return `Congratulations, ${parameters['CodeName']}! You just earned 100 points.`
  }

};

module.exports = fulfill;