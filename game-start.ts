import { checkIfWon, playTurn } from "./turns-functions";

export const readlineSync = require("readline-sync");
const answers: string[] = ["Doubtfire", "Mishap", "Fire", "Vacation"];

export let currentAnswer = answers[0];
// answers[Math.floor(Math.random() * answers.length - 1) + 1];

export let guessesMade: string[] = [];

export let guessesLeft = 5;

export let debugMode = true;

export const setCurrentAnswer = (input: string) => (currentAnswer = input);

export const setGuessesMade = (input: string) => guessesMade.push(input);

export const setGuessesLeft = (input: number) => (guessesLeft = input);

export const setDebugMode = (mode: boolean) => (debugMode = mode);

const resetValues = () => {
  const randomAnswer =
    answers[Math.floor(Math.random() * answers.length - 1) + 1];
  setCurrentAnswer(randomAnswer);
  guessesMade.length = 0;
};

console.clear();
playTurn();
