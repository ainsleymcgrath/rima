
exports.helloHttp =  (context, req) => {
  response = "This is a sample response from your webhook!"

  //"speech" is the spoken version of the response, "displayText" is the visual version

  context.log(process.version)
  context.done(null, response)

};