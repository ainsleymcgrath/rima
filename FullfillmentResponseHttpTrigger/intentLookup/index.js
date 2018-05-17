// a lovely nested json for generating relevant responses
// for the Visit, Answer, and TellAbout intents
// -- outermost keys are intent names.
// -- values contain either a response() function for... 
// -- ...filling out templates or a point value or both
const intentLookup = {
  TestIntent: {
    response: () => `(With up so floating many bells down)`
  },
  VisitIoTea: {
    points: 100,
    response: (codename, answer) => `Congratulations, ${codename}! You just earned 100 points.`
  },
  VisitRobotRace: {
    points: 100,
    response: (codename, answer) => `Well played, human. 100 points for ${codename}!`
  },
  VisitRima: {
    points: 100,
    response: (codename, answer) => `Good job! That's 100 points for you, ${codename}.`
  },
  VisitSnakes: {
    points: 100,
    response: (codename, answer) => `Way to go, ${codename}! 100 points for you!`
  },
  VisitPlumbing: {
    points: 100,
    response: (codename, answer) => `Wow. You figured out the puzzle. 100 points for ${codename}!`
  },
  VisitScoreboard: {
    points: 100,
    response: (codename, answer) => `Excellent work, ${codename}. That's 100 points coming your way.`
  },
  VisitPinnacle: {
    points: 250,
    response: (codename, answer) => `${codename}!`
  },
  VisitBigSquid: {
    points: 250,
    response: (codename, answer) => `Holy cow, you're good at this game, ${codename}. Here, have 250 points.`
  },
  VisitAttunity: {
    points: 250,
    response: (codename, answer) => `You just earned yourself 250 points, ${codename}.`
  },
  VisitLooker: {
    points: 250,
    response: (codename, answer) => `Is that you, ${codename}? You look like you need 250 points.`
  },
  VisitMicrosoft: {
    points: 1000,
    response: (codename, answer) => `WOOHOO! You got the big one! ONE THOUSAND POINTS for ${codename}!!!`
  },
  VisitFivetran: {
    points: 250,
    response: (codename, answer) => `You're certainly making your way around the science fair! 250 points for you, ${codename}.`
  },
  VisitSnowflake: {
    points: 250,
    response: (codename, answer) => `Impressive work, ${codename}. Have 250 points.`
  },
  AnswerFavoriteColorQuestion: {
    points: 500,
    response: (codename, answer) => `Thanks for the input, ${codename}. ${answer} is a great favorite color.`
  },
  AnswerLeastFavoriteColorQuestion: {
    points: 500,
    response: (codename, answer) => `I don't have a lot of opinions, but I think ${answer} is gross too. Thanks, ${codename}.`
  },
  AnswerGender: {
    points: 500,
    response: (codename, answer) => `Great gender, ${codename}. I love it!`
  },
  AnswerAgeRange: {
    points: 500,
    response: (codename, answer) => `Thanks for sharing, but never forget: Age is only a number, ${codename}.`
  },
  TellAboutIoTea: {
    response: () => `Stop by for your afternoon pick-me-up with your choice of “smart” tea or coffee. Start brewing your drink of choice from across the venue by sending a tweet!` 
  },
  TellAboutRobotRace: {
    response: () => `Compete one-on-one in an IoT-powered Robot Race. Watch how a phone’s accelerometer data is stored, visualized and finally sent to a Raspberry Pi controlled robot as you compete with your opponent in an IoT-powered race to the finish.`
  },
  TellAboutRima: {
    response: () => `Paper is wasteful. Brochures are boring. Modern cloud toolkits make it easy to create intelligent conversational agents, like me! Stop by the booth to learn about my brain.`
  },
  TellAboutSnakes: {
    response: () => `We used Airflow to pipe data from ReST APIs to Blob storage, transforming unstructured data into insightful visualizations. Airflow has few opinions on how you implement your pipelines, however the philosophy behind the tool is quite unique.`
  },
  TellAboutPlumbing: {
    response: () => `Take a look under the hood at how data ties everything together. Data architecture is the core of everything we do at Aptitive and the glue that holds all of the (data) Science Fair projects together.`
  },
  TellAboutScoreboard: {
    response: () => `Watch how you progress against your fellow (data) Science Fair competitors in real time. Who will be our number one participant?`
  },
  TellAboutPinnacle: {
    response: () => `Pinnacle is an information technology solutions provider that designs, implements and manages affordable, scalable IT solutions and services for clients across all industries.`
  },
  TellAboutBigSquid: {
    response: () => `BigSquid’s Kraken platform integrates with your existing data & analytics technology. From your data warehouse to your data visualization tools, Kraken adds the power of machine learning to every component.`
  },
  TellAboutAttunity: {
    response: () => `Attunity Replicate empowers organizations to accelerate data replication, ingest and streaming across a wide range of heterogeneous databases, data warehouses and Big Data platforms.`
  },
  TellAboutLooker: {
    response: () => `Business intelligence, big data analytics, or a 360 view of your customers. Whatever you need, Looker can help.`
  },
  TellAboutMicrosoft: {
    response: () => `Microsoft!!!!!!`
  },
  TellAboutFivetran: {
    response: () => `Analyzing your organization's data is essential for growing your business. Fivetran makes this easy by connecting your applications, databases and more to a central data warehouse.`
  },
  TellAboutSnowflake: {
    response: () => `Snowflake is the only data warehouse built for the cloud.`
  },
}

module.exports = intentLookup