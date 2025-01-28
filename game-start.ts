import { displayPlayerInfo } from "./menu-functions";

const answers: string[] = ["Doubtfire", "Mishap", "Fire", "Vacation"];

export let currentAnswer =
  answers[Math.floor(Math.random() * answers.length - 1) + 1];

export let correctChoices = currentAnswer.split("");

export let guessesMade: string[] = [];

export let guessesLeft = 5;

const setCurrentAnswer = (input: string) => (currentAnswer = input);

const setCorrectChoices = (input: string) => (correctChoices = input.split(""));

const setGuessesMade = (input: string) => guessesMade.push(input);

const resetValues = () => {
  const randomAnswer =
    answers[Math.floor(Math.random() * answers.length - 1) + 1];
  setCurrentAnswer(randomAnswer);
  correctChoices.length = 0;
  setCorrectChoices(currentAnswer);
  guessesMade.length = 0;
};

const readlineSync = require("readline-sync");

displayPlayerInfo();
