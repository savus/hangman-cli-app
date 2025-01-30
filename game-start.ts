import { playTurn } from "./turns-functions";
import { isAlreadyGuessed } from "./validations";

export const readlineSync = require("readline-sync");
const answers: string[] = ["Doubtfire", "Mishap", "Fire", "Vacation"];
export let imageIndex = 0;
export const hangmanImages = [
  `
    +---+
    |   |
        |
        |
        |
        |
  =========
`,
  `
    +---+
    |   |
    O   |
        |
        |
        |
  =========
`,
  `
    +---+ 
    |   |
    O   |
    |   |
        |
        |
  =========
`,
  `
    +---+
    |   |
    O   |
   /|   |
        |
        |
  =========
`,
  `
    +---+
    |   |
    O   |
   /|\\  |
        |
        |
  =========
`,
  `
    +---+
    |   |
    O   |
   /|\\  |
   /    |
        |
  =========
`,
  `
    +---+
    |   |
    O   |
   /|\\  |
   / \\  |
        |
  =========
`,
];

export let currentAnswer = answers[0];
// answers[Math.floor(Math.random() * answers.length - 1) + 1];

export let guessesMade: string[] = ["d", "k", "f"];

export let debugMode = false;

export const setCurrentAnswer = (input: string) => (currentAnswer = input);

export const setGuessesMade = (input: string) => guessesMade.push(input);

export const showGuessesLeft = () => hangmanImages.length - imageIndex;

export const setDebugMode = (mode: boolean) => (debugMode = mode);

export const setImageIndex = (input: number) => (imageIndex = input);

const resetValues = () => {
  const randomAnswer =
    answers[Math.floor(Math.random() * answers.length - 1) + 1];
  setCurrentAnswer(randomAnswer);
  guessesMade.length = 0;
};

console.clear();

playTurn();
