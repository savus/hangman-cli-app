import { displayPlayerInfo } from "./menu-functions";
import { compareWithAnswer } from "./validations";

const answers: string[] = ["Doubtfire", "Mishap", "Fire", "Vacation"];

export let currentAnswer =
  answers[Math.floor(Math.random() * answers.length - 1) + 1];

export let guessesMade: string[] = [];

export let guessesLeft = 5;

export let debugMode = true;

const setCurrentAnswer = (input: string) => (currentAnswer = input);

const setGuessesMade = (input: string) => guessesMade.push(input);

const setDebugMode = (mode: boolean) => (debugMode = mode);

const resetValues = () => {
  const randomAnswer =
    answers[Math.floor(Math.random() * answers.length - 1) + 1];
  setCurrentAnswer(randomAnswer);
  guessesMade.length = 0;
};

const readlineSync = require("readline-sync");

displayPlayerInfo();

let userInput = readlineSync.question("Please enter a guess");

console.log(compareWithAnswer(userInput));
