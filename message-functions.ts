import { guessesMade, readlineSync } from "./game-start";
import { hangmanImages, imageIndex } from "./hangman-images";
import { tutorials } from "./tutorials";

export const answers: string[] = [
  "ant",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "book",
  "burrow",
  "camel",
  "cat",
  "clam",
  "cobra",
  "computer",
  "cougar",
  "coyote",
  "crow",
  "deer",
  "dog",
  "donkey",
  "duck",
  "eagle",
  "fall",
  "ferret",
  "fox",
  "frog",
  "goat",
  "goose",
  "hawk",
  "lion",
  "lizard",
  "llama",
  "mishap",
  "mole",
  "monkey",
  "moose",
  "mouse",
  "muffin",
  "mule",
  "newt",
  "otter",
  "owl",
  "panda",
  "paper",
  "parrot",
  "pigeon",
  "pizza",
  "plane",
  "python",
  "rabbit",
  "ram",
  "rat",
  "raven",
  "rhino",
  "salmon",
  "school",
  "seal",
  "seven",
  "shark",
  "sheep",
  "skunk",
  "sloth",
  "snake",
  "spider",
  "spring",
  "stork",
  "summer",
  "swan",
  "tiger",
  "toad",
  "trout",
  "turkey",
  "turtle",
  "vacation",
  "weasel",
  "whale",
  "winter",
  "wolf",
  "wombat",
  "work",
  "zebra",
];

const textColors = {
  red: "\x1b[31m",
  cyan: "\x1b[36m",
  green: "\x1b[32m",
  magenta: "\x1b[35m",
  default: "\x1b[0m",
};

export const displayScreen = (
  title: string = "",
  callback: () => void,
  message: string = ""
) => {
  console.clear();
  if (title.length > 0)
    console.log(`${textColors["green"]}${title}${textColors["default"]}`);
  displayHeader();
  callback();
  displayHeader();

  if (message) {
    readlineSync.question(message);
  }
};

export const displayIntro = () => {
  displayScreen(
    "Introduction",
    () => {
      console.log(" Welcome to Hangman!");
    },
    " Press any key to continue..."
  );
};

export const askForTutorial = () => {
  console.log("\n");
  return readlineSync.keyInYN(" Would you like a tutorial?");
};

export const runTutorial = () => {
  tutorials.tutorialPartOne();
  tutorials.tutorialPartTwo();
  tutorials.tutorialPartThree();
  tutorials.tutorialPartFour();
  tutorials.tutorialPartFive();
};

const displayHeader = () => console.log("\n", "=".repeat(25), "\n");

export const displayHangmanImage = (image_index: number) =>
  console.log(hangmanImages[image_index]);

export const displayScore = (guessesMade: string[], guessesLeft: number) => {
  console.log(
    `Guesses made: [${guessesMade}]`,
    "-".repeat(10),
    `Guesses Left: ${guessesLeft}\n`
  );
};

export const displayAnswer = (
  answer: string,
  guessesMade: string[],
  showAnswer = false
) => {
  return console.log(
    answer
      .split("")
      .map((letter) =>
        guessesMade.includes(letter) ||
        guessesMade.includes(letter.toLowerCase()) ||
        showAnswer
          ? letter
          : "_"
      )
  );
};

export const displayPlayerInfo = (
  answer: string,
  index = imageIndex,
  debug = false
) => {
  displayScreen("Running Game", () => {
    displayHangmanImage(index);
    displayScore(guessesMade, showGuessesLeft());
    displayAnswer(answer, guessesMade, debug);
  });
};

export const showGuessesLeft = () => hangmanImages.length - imageIndex;
