import {
  currentAnswer,
  debugMode,
  guessesMade,
  readlineSync,
} from "./game-start";
import { hangmanImages, imageIndex, showGuessesLeft } from "./hangman-images";

export const answers: string[] = [
  "ant",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "burrow",
  "book",
  "camel",
  "cat",
  "clam",
  "cobra",
  "cougar",
  "coyote",
  "crow",
  "computer",
  "deer",
  "dog",
  "donkey",
  "duck",
  "eagle",
  "ferret",
  "fox",
  "frog",
  "fall",
  "goat",
  "goose",
  "hawk",
  "lion",
  "lizard",
  "llama",
  "mole",
  "monkey",
  "moose",
  "mouse",
  "mule",
  "mishap",
  "newt",
  "otter",
  "owl",
  "panda",
  "parrot",
  "pigeon",
  "python",
  "pizza",
  "paper",
  "rabbit",
  "ram",
  "rat",
  "raven",
  "rhino",
  "salmon",
  "seal",
  "shark",
  "sheep",
  "skunk",
  "sloth",
  "snake",
  "spider",
  "stork",
  "swan",
  "school",
  "summer",
  "spring",
  "tiger",
  "toad",
  "trout",
  "turkey",
  "turtle",
  "vacation",
  "weasel",
  "whale",
  "wolf",
  "wombat",
  "winter",
  "work",
  "zebra",
];

export const displayIntro = () => {
  displayHeader();
  console.log(" Welcome to Hangman!");
  displayHeader();
  readlineSync.question(" press any key to continue...\n");
};

export const askForTutorial = () => {
  return readlineSync.keyInYN(" Would you like a tutorial?");
};

export const tutorialPartOne = () => {
  displayHeader();
  displayHangmanImage(0);
  displayHeader();
};

export const runTutorial = () => {};

const displayHeader = () => console.log("\n", "=".repeat(25), "\n");

const displayHangmanImage = (image_index: number) =>
  console.log(hangmanImages[image_index]);

const displayScore = () => {
  console.log(
    `Guesses made: [${guessesMade}]`,
    "-".repeat(10),
    `Guesses Left: ${showGuessesLeft()}\n`
  );
};

const displayAnswer = (answer: string, showAnswer = false) => {
  return answer
    .split("")
    .map((letter) =>
      guessesMade.includes(letter) ||
      guessesMade.includes(letter.toLowerCase()) ||
      debugMode === true ||
      showAnswer
        ? letter
        : "_"
    );
};

export const displayProgress = (showAnswer = false) =>
  console.log(displayAnswer(currentAnswer, showAnswer));

export const displayPlayerInfo = () => {
  displayHeader();
  displayHangmanImage(imageIndex);
  displayScore();
  displayProgress();
  displayHeader();
};
