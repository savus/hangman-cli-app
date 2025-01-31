import { guessesMade, readlineSync } from "./game-start";
import { hangmanImages, imageIndex, showGuessesLeft } from "./hangman-images";

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

const screenDisplay = (callback: () => void, message: string) => {
  console.clear();
  displayHeader();
  callback();
  displayHeader();
  readlineSync.question(message);
};

export const displayIntro = () => {
  screenDisplay(() => {
    console.log(" Welcome to Hangman!");
  }, " Press any key to continue...");
};

export const askForTutorial = () => {
  return readlineSync.keyInYN(" Would you like a tutorial?");
};

export const tutorialPartOne = () => {
  screenDisplay(() => {
    displayHangmanImage(0);
    displayAnswer("Answer", true, false);
  }, " You start with an empty gallows and a hidden word that you are trying to guess");
};

export const tutorialPartTwo = () => {
  screenDisplay(() => {
    displayHangmanImage(1);
    console.log(`Guesses made: [k]`, "-".repeat(10), `Guesses Left: 6\n`);
    displayAnswer("Answer", false, false);
  }, " If you guess incorrectly, a piece of the hangman will be drawn");
};

export const tutorialPartThree = () => {
  screenDisplay(() => {
    displayHangmanImage(1);
    console.log(`Guesses made: [k, a]`, "-".repeat(10), `Guesses Left: 6\n`);
    console.log(
      "Answer"
        .split("")
        .map((letter) => (letter.toLowerCase() !== "a" ? "_" : letter))
    );
  }, " If you guess correctly, all letters that match your guess will be revealed");
};

export const tutorialPartFour = () => {
  screenDisplay(() => {
    displayHangmanImage(1);
    console.log(
      `Guesses made: [k, a, n, s, w, e, r]`,
      "-".repeat(10),
      `Guesses Left: 6\n`
    );
    console.log("Answer".split("").map((letter) => letter));
  }, " If you guess all of the letters correctly before you run out of guesses, you win!");
};

export const tutorialPartFive = () => {
  screenDisplay(() => {
    displayHangmanImage(6);
    console.log(
      `Guesses made: [k, a, f, p, q, o, i]`,
      "-".repeat(10),
      `Guesses Left: 0\n`
    );
    console.log("Answer".split("").map((letter) => letter));
  }, " But if the hangman gets fully drawn before then, it's curtains!");
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

export const displayAnswer = (
  answer: string,
  showAnswer = false,
  debug = false
) => {
  return console.log(
    answer
      .split("")
      .map((letter) =>
        guessesMade.includes(letter) ||
        guessesMade.includes(letter.toLowerCase()) ||
        debug === true ||
        showAnswer
          ? letter
          : "_"
      )
  );
};

export const displayPlayerInfo = (
  answer: string,
  index = imageIndex,
  showAnswer = false,
  debug = false
) => {
  displayHeader();
  displayHangmanImage(index);
  displayScore();
  displayAnswer(answer, showAnswer, debug);
  displayHeader();
};
