const chalk = require("chalk");

console.log(chalk.bold.rgb(10, 100, 200)("Hello Blue RGB!"));
console.log(chalk.bold.rgb(218, 24, 24)`Hello Red RGB!`);
console.log(chalk`{bold.rgb(218, 218, 24) Hello Bold RGB Yellow!}`);
