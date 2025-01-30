import {
  currentAnswer,
  debugMode,
  guessesMade,
  readlineSync,
  setDebugMode,
} from "./game-start";
import { imageIndex, setImageIndex, showGuessesLeft } from "./hangman-images";
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

export const playTurn = (): boolean => {
  console.clear();
  displayPlayerInfo();
  let userInput = readlineSync.question(
    "Please enter a guess, or type 'debug' to enter debug mode or 'quit' to exit\n"
  );

  if (userInput === "quit") {
    return false;
  } else if (userInput === "debug") {
    setDebugMode(!debugMode);
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
      displayProgress();
      readlineSync.question("You won!");
      return true;
    }
  }

  return playTurn();
};
