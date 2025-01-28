import {
  currentAnswer,
  guessesLeft,
  guessesMade,
  readlineSync,
  setGuessesLeft,
} from "./game-start";
import { displayPlayerInfo } from "./menu-functions";
import { compareWithAnswer, isInputValid } from "./validations";

export const checkIfWon = () => {
  let correctChoices = guessesMade.filter(
    (letter) =>
      currentAnswer.includes(letter.toLowerCase()) ||
      currentAnswer.includes(letter.toUpperCase())
  );
  return correctChoices.length === currentAnswer.length;
};

const checkIfLost = () => guessesLeft === 0;

export const playTurn = (): boolean => {
  console.clear();
  displayPlayerInfo();
  let userInput = readlineSync.question("Please enter a guess\n");
  if (!isInputValid(userInput)) {
    return playTurn();
  }

  if (compareWithAnswer(userInput)) {
    readlineSync.question("You guessed correctly!");
    guessesMade.push(userInput.toLowerCase());
  } else {
    setGuessesLeft(guessesLeft - 1);
    if (checkIfLost()) {
      readlineSync.question(`Sorry, you lose!`);
      return false;
    }
    readlineSync.question(
      `You guessed incorrectly! ${guessesLeft} guesses remaining`
    );
  }

  if (checkIfWon()) {
    readlineSync.question("You won!");
    return true;
  }

  return playTurn();
};
