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

export const setImageIndex = (input: number) => (imageIndex = input);
