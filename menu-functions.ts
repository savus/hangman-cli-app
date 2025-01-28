import {
  currentAnswer,
  debugMode,
  guessesLeft,
  guessesMade,
} from "./game-start";

const displayHeader = () => console.log("\n", "=".repeat(25), "\n");

const displayScore = () => {
  console.log(
    `Guesses made: [${guessesMade}]`,
    "-".repeat(10),
    `Guesses Left: ${guessesLeft}`
  );
};

const displayProgress = () =>
  currentAnswer
    .split("")
    .map((letter) =>
      guessesMade.includes(letter) || debugMode === true ? letter : "_"
    );

export const displayPlayerInfo = () => {
  displayHeader();
  displayScore();
  console.log(displayProgress());
  displayHeader();
};
