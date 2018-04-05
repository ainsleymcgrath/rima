const fulfill = (intent, result) => {

  const {
    resolvedQuery,
    action,
    parameters,
    contexts
  } = result;

  switch (intent) {
    case 'TestIntent':
      return `(With up so floating many bells down)`;
      break;
    case 'SignIn':
      return `Awesome. You're signed in as ${parameters.given-name} with email address ${parameters.email}.`;
      break;
    default:
      return `Something seems to have gone wrong... Please, try again.`;
      break;
  }

};

module.exports = fulfill;