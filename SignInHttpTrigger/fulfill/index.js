const fulfill = (intent) => {
  switch (intent) {
    case 'TestIntent':
      return `(With up so floating many bells down)`;
      break;
    default:
      return `Something seems to have gone wrong... Please, try again.`;
      break;
  }
};

module.exports = fulfill;