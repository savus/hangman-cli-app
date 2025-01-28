import { currentAnswer, guessesMade, readlineSync } from "./game-start";

export const isAlreadyGuessed = (input: string) => {
  if (guessesMade.includes(input.toLowerCase())) {
    return true;
  }
  return false;
};

export const compareWithAnswer = (input: string) => {
  const regEx = new RegExp(input, "gi");
  return regEx.test(currentAnswer);
};

export const isInputValidLength = (input: string) => input.length === 1;

export const isInputValid = (input: string) => {
  if (!isInputValidLength(input)) {
    readlineSync.question("Answer must be one character");
    return false;
  }

  if (isAlreadyGuessed(input)) {
    readlineSync.question("You have already guessed this answer");
    return false;
  }

  return true;
};
