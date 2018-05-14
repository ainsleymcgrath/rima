const intentLookup = {
  "TestIntent": {
    "response": () => "(With up so floating many bells down)"
  },
  "VisitIoTea": {
    "points": 100,
    "response": (codename, answer) => `Congratulations, ${codename}! You just earned 100 points.`
  },
  "VisitRobotRace": {
    "points": 100,
    "response": (codename, answer) => `Well played, human. 100 points for ${codename}!`
  },
  "VisitRima": {
    "points": 100,
    "response": (codename, answer) => `Good job! That's 100 points for you, ${codename}.`
  },
  "VisitSnakes": {
    "points": 100,
    "response": (codename, answer) => `Way to go, ${codename}! 100 points for you!`
  },
  "VisitPlumbing": {
    "points": 100,
    "response": (codename, answer) => `Wow. You figured out the puzzle. 100 points for ${codename}!`
  },
  "VisitScoreboard": {
    "points": 100,
    "response": (codename, answer) => `Excellent work, ${codename}. That's 100 points coming your way.`
  },
  "VisitPinnacle": {
    "points": 250,
    "response": (codename, answer) => `OMG! You just earned 250 points, ${codename}!`
  },
  "VisitBigSquid": {
    "points": 250,
    "response": (codename, answer) => `Holy cow, you're good at this game, ${codename}. Here, have 250 points.`
  },
  "VisitAttunity": {
    "points": 250,
    "response": (codename, answer) => `You just earned yourself 250 points, ${codename}.`
  },
  "VisitLooker": {
    "points": 250,
    "response": (codename, answer) => `Is that you, ${codename}? You look like you need 250 points.`
  },
  "VisitMicrosoft": {
    "points": 1000,
    "response": (codename, answer) => `WOOHOO! You got the big one! ONE THOUSAND POINTS for ${codename}!!!`
  },
  "VisitFivetran": {
    "points": 250,
    "response": (codename, answer) => `You're certainly making your way around the science fair! 250 points for you, ${codename}.`
  },
  "VisitSnowflake": {
    "points": 250,
    "response": (codename, answer) => `Impressive work, ${codename}. Have 250 points.`
  },
  "AnswerFavoriteColorQuestion": {
    "points": 500,
    "response": (codename, answer) => `Thanks for the input, ${codename}. ${answer} is a great favorite color.`
  },
  "AnswerLeastFavoriteColorQuestion": {
    "points": 500,
    "response": (codename, answer) => `I don't have a lot of opinions, but I think ${answer} is gross too. Thanks, ${codename}.`
  },
  "AnswerGender": {
    "points": 500,
    "response": (codename, answer) => `Great gender, ${codename}. I love it!`
  },
  "AnswerAgeRange": {
    "points": 500,
    "response": (codename, answer) => `Thanks for sharing, but never forget: Age is only a number, ${codename}.`
  },
}

module.exports =  intentLookup