const answers: string[] = ["Doubtfire"];

const correctChoices = answers[0].split("");
let guessesMade: string[] = [];
const displayMessage = () =>
  correctChoices.map((letter) => (guessesMade.includes(letter) ? letter : "_"));

const readlineSync = require("readline-sync");

console.log("Type a letter you think might be in this word");
console.log(displayMessage());
console.log(`Current guesses have been: [${guessesMade}]`);
const userInput = readlineSync.question("Type your answer here\n");

if (correctChoices.includes(userInput)) {
  console.log("Correct!");
  guessesMade.push(userInput);
}
console.log(displayMessage());
