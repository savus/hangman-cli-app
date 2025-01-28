import {
  guessesLeft,
  guessesMade,
  readlineSync,
  setGuessesLeft,
  setTurnsLeft,
  turnsLeft,
} from "./game-start";
import { displayPlayerInfo } from "./menu-functions";
import { compareWithAnswer, isInputValid } from "./validations";

export const playTurn = (): boolean => {
  displayPlayerInfo();
  let userInput = readlineSync.question("Please enter a guess\n");
  if (!isInputValid(userInput)) {
    return playTurn();
  }

  if (compareWithAnswer(userInput)) {
    readlineSync.question("You guessed correctly!");
    guessesMade.push(userInput);
    setTurnsLeft(turnsLeft - 1);
  } else {
    setGuessesLeft(guessesLeft - 1);
    if (guessesLeft === 0) {
      readlineSync.question(`Sorry, you lose!`);
      return false;
    }
    readlineSync.question(
      `You guessed incorrectly! ${guessesLeft} guesses remaining`
    );
  }

  if (turnsLeft === 0) {
    readlineSync.question("Game Ended");
    return true;
  }

  return playTurn();
};
