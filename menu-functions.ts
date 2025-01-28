import {
  currentAnswer,
  debugMode,
  guessesLeft,
  guessesMade,
} from "./game-start";

const displayHeader = () => console.log("\n", "=".repeat(25), "\n");

const displayScore = () => {
  console.log(`Guesses made: [${guessesMade}]`);
  console.log(`Guesses Left: ${guessesLeft}\n`);
};

const displayProgress = () =>
  currentAnswer
    .split("")
    .map((letter) =>
      guessesMade.includes(letter) || debugMode === true ? letter : "_"
    );

export const displayPlayerInfo = () => {
  console.clear();
  displayHeader();
  displayScore();
  console.log(displayProgress());
  displayHeader();
};
