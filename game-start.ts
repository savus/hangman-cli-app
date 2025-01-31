import {
  answers,
  askForTutorial,
  displayIntro,
  tutorialPartFive,
  tutorialPartFour,
  tutorialPartOne,
  tutorialPartThree,
  tutorialPartTwo,
} from "./message-functions";
import { playTurn } from "./turns-functions";

export const correctGuessesMade: string[] = [];
export const setCurrentAnswer = (input: string) => (currentAnswer = input);
export const setGuessesMade = (input: string) => guessesMade.push(input);
export const setDebugMode = (mode: boolean) => (debugMode = mode);
const resetValues = () => {
  const randomAnswer =
    answers[Math.floor(Math.random() * answers.length - 1) + 1];
  setCurrentAnswer(randomAnswer);
  guessesMade.length = 0;
};
export const readlineSync = require("readline-sync");

export let currentAnswer =
  answers[Math.floor(Math.random() * answers.length - 1) + 1];
export let guessesMade: string[] = [];
export let debugMode = false;

console.clear();

displayIntro();
askForTutorial();
tutorialPartOne();
tutorialPartTwo();
tutorialPartThree();
tutorialPartFour();
tutorialPartFive();
playTurn();
