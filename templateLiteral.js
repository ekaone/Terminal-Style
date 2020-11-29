const chalk = require("chalk");

const miles = 18;
const calculateFeet = miles => miles * 5280;

console.log(chalk`
	There are {yellow.bold 5280 feet} in a mile.
	In {red.bold ${miles} miles}, there are {green.bold ${calculateFeet(
  miles
)} feet}.
`);
