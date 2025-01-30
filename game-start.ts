import { playTurn } from "./turns-functions";

export const readlineSync = require("readline-sync");
const answers: string[] = ["Doubtfire", "Mishap", "Fire", "Vacation"];

export let currentAnswer =
  answers[Math.floor(Math.random() * answers.length - 1) + 1];

export let guessesMade: string[] = [];

export const correctGuessesMade: string[] = [];

export let debugMode = false;

export const setCurrentAnswer = (input: string) => (currentAnswer = input);

export const setGuessesMade = (input: string) => guessesMade.push(input);

export const setDebugMode = (mode: boolean) => (debugMode = mode);

const resetValues = () => {
  const randomAnswer =
    answers[Math.floor(Math.random() * answers.length - 1) + 1];
  setCurrentAnswer(randomAnswer);
  guessesMade.length = 0;
};

console.clear();

playTurn();
