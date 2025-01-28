import { currentAnswer, guessesMade } from "./game-start";

export const isAlreadyGuessed = (input: string) => {
  if (guessesMade.includes(input.toLowerCase())) {
    console.log("You've already guessed this letter, please try again");
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
    console.log("Answer must be one character");
    return false;
  }

  if (isAlreadyGuessed(input)) {
    console.log("You have already guessed this answer");
    return false;
  }

  return true;
};
