import {
  currentAnswer,
  guessesMade,
  hangmanImages,
  imageIndex,
  showGuessesLeft,
} from "./game-start";

const displayHeader = () => console.log("\n", "=".repeat(25), "\n");

const displayHangmanImage = () => console.log(hangmanImages[imageIndex]);

const displayScore = () => {
  console.log(
    `Guesses made: [${guessesMade}]`,
    "-".repeat(10),
    `Guesses Left: ${showGuessesLeft()}\n`
  );
};

export const displayProgress = (debug = false) =>
  console.log(
    currentAnswer
      .split("")
      .map((letter) =>
        guessesMade.includes(letter) ||
        guessesMade.includes(letter.toLowerCase()) ||
        debug === true
          ? letter
          : "_"
      )
  );

export const displayPlayerInfo = (debug = false) => {
  displayHeader();
  displayHangmanImage();
  displayScore();
  displayProgress(debug);
  displayHeader();
};
