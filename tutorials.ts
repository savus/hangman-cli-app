import { guessesMade } from "./game-start";
import {
  displayAnswer,
  displayHangmanImage,
  displayScore,
  displayScreen,
} from "./message-functions";

const tutorialPartOne = () => {
  const title = "Running Tutorial";
  displayScreen(
    title,
    () => {
      displayHangmanImage(0);
      displayScore([], 7);
      displayAnswer("Answer", guessesMade, true);
    },
    " You start with an empty gallows and a hidden word that you are trying to guess"
  );
};

const tutorialPartTwo = () => {
  const title = "Running Tutorial";
  displayScreen(
    title,
    () => {
      displayHangmanImage(1);
      displayScore(["k"], 6);
      displayAnswer("Answer", guessesMade);
    },
    " If you guess incorrectly, a piece of the hangman will be drawn"
  );
};

const tutorialPartThree = () => {
  const guessList = ["k", "a"];
  const title = "Running Tutorial";
  displayScreen(
    title,
    () => {
      displayHangmanImage(1);
      displayScore(guessList, 6);
      displayAnswer("Answer", guessList);
    },
    " If you guess correctly, all letters that match your guess will be revealed"
  );
};

const tutorialPartFour = () => {
  const guessList = ["k", "a", "n", "s", "w", "e", "r"];
  const title = "Running Tutorial";
  displayScreen(
    title,
    () => {
      displayHangmanImage(1);
      displayScore(guessList, 6);
      displayAnswer("Answer", guessList);
    },
    " If you guess all of the letters correctly before you run out of guesses, you win!"
  );
};

const tutorialPartFive = () => {
  const guessList = ["k", "a", "f", "p", "q", "o", "i"];
  const title = "Running Tutorial";
  displayScreen(
    title,
    () => {
      displayHangmanImage(6);
      displayScore(guessList, 0);
      displayAnswer("Answer", guessList);
    },
    " But if the hangman gets fully drawn before then, it's curtains!"
  );
};

export const tutorials = {
  tutorialPartOne,
  tutorialPartTwo,
  tutorialPartThree,
  tutorialPartFour,
  tutorialPartFive,
};
