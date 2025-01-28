import { correctChoices, guessesLeft, guessesMade } from "./game-start";

const displayHeader = () => console.log("\n", "=".repeat(25), "\n");

const displayScore = () => {
  console.log(`Guesses made: [${guessesMade}]`);
  console.log(`Guesses Left: ${guessesLeft}\n`);
};

const displayProgress = () =>
  correctChoices.map((letter) => (guessesMade.includes(letter) ? letter : "_"));

export const displayPlayerInfo = () => {
  console.clear();
  displayHeader();
  displayScore();
  console.log("\t".repeat(10), displayProgress());
  displayHeader();
};
