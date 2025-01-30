import { currentAnswer, debugMode, guessesMade } from "./game-start";
import { hangmanImages, imageIndex, showGuessesLeft } from "./hangman-images";

const displayHeader = () => console.log("\n", "=".repeat(25), "\n");

const displayHangmanImage = () => console.log(hangmanImages[imageIndex]);

const displayScore = () => {
  console.log(
    `Guesses made: [${guessesMade}]`,
    "-".repeat(10),
    `Guesses Left: ${showGuessesLeft()}\n`
  );
};

export const displayProgress = () =>
  console.log(
    currentAnswer
      .split("")
      .map((letter) =>
        guessesMade.includes(letter) ||
        guessesMade.includes(letter.toLowerCase()) ||
        debugMode === true
          ? letter
          : "_"
      )
  );

export const displayPlayerInfo = () => {
  displayHeader();
  displayHangmanImage();
  displayScore();
  displayProgress();
  displayHeader();
};
