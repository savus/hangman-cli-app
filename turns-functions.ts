import {
  correctGuessesMade,
  currentAnswer,
  debugMode,
  guessesMade,
  readlineSync,
  setDebugMode,
} from "./game-start";
import { imageIndex, setImageIndex } from "./hangman-images";
import {
  displayAnswer,
  displayPlayerInfo,
  showGuessesLeft,
} from "./message-functions";
import { validations } from "./validations";

const checkIfWon = () => {
  return currentAnswer
    .split("")
    .every(
      (letter) =>
        correctGuessesMade.includes(letter.toLowerCase()) ||
        correctGuessesMade.includes(letter.toLowerCase())
    );
};

const playerWon = () => {
  displayAnswer(currentAnswer, guessesMade, true);
  readlineSync.question("You won!");
};

const checkIfLost = () => showGuessesLeft() === 0;

const playerLost = () => {
  displayAnswer(currentAnswer, guessesMade, true);
  readlineSync.question(`Nope! Sorry, you lose!`);
};

const guessedCorrectly = (userInput: string) => {
  readlineSync.question("You guessed correctly!");
  guessesMade.push(userInput.toLowerCase());
  correctGuessesMade.push(userInput);
};

const guessedIncorrectly = (userInput: string) => {
  readlineSync.question(
    `You guessed incorrectly! ${showGuessesLeft()} guesses remaining`
  );
  guessesMade.push(userInput.toLowerCase());
};

export const playTurn = (): boolean => {
  console.clear();
  displayPlayerInfo(currentAnswer, imageIndex, debugMode);
  let userInput = readlineSync.question(
    "Please enter a guess, or type 'debug' to enter debug mode or 'quit' to exit\n"
  );

  if (userInput === "quit") {
    return false;
  } else if (userInput === "debug") {
    setDebugMode(!debugMode);
  } else {
    if (!validations.isInputValid(userInput)) {
      return playTurn();
    }

    if (validations.compareWithAnswer(userInput)) {
      guessedCorrectly(userInput);
    } else {
      setImageIndex(imageIndex + 1);
      if (checkIfLost()) {
        playerLost();
        return false;
      }
      guessedIncorrectly(userInput);
    }

    if (checkIfWon()) {
      playerWon();
      return true;
    }
  }

  return playTurn();
};
