import {
  currentAnswer,
  guessesMade,
  imageIndex,
  readlineSync,
  setImageIndex,
  showGuessesLeft,
} from "./game-start";
import { displayPlayerInfo, displayProgress } from "./menu-functions";
import { compareWithAnswer, isInputValid } from "./validations";

export const checkIfWon = () => {
  let correctChoices = guessesMade.filter(
    (letter) =>
      currentAnswer.includes(letter.toLowerCase()) ||
      currentAnswer.includes(letter.toUpperCase())
  );
  return correctChoices.length === currentAnswer.length;
};

const checkIfLost = () => showGuessesLeft() === 0;

export const playTurn = (debug = false): boolean => {
  console.clear();
  displayPlayerInfo(debug);
  let userInput = readlineSync.question("Please enter a guess\n");

  if (userInput === "quit") {
    return false;
  } else {
    if (!isInputValid(userInput)) {
      return playTurn();
    }

    if (compareWithAnswer(userInput)) {
      readlineSync.question("You guessed correctly!");
      guessesMade.push(userInput.toLowerCase());
    } else {
      setImageIndex(imageIndex + 1);
      if (checkIfLost()) {
        readlineSync.question(`Nope! Sorry, you lose!`);
        return false;
      }
      readlineSync.question(
        `You guessed incorrectly! ${showGuessesLeft()} guesses remaining`
      );
      guessesMade.push(userInput.toLowerCase());
    }

    if (checkIfWon()) {
      displayProgress(debug);
      readlineSync.question("You won!");
      return true;
    }
  }

  return playTurn();
};
