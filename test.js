const FML = require("./FML");
const responseGenerator = new FML("./inspiration.json");
const response = responseGenerator.generateResponse("inspo");
console.log(response);