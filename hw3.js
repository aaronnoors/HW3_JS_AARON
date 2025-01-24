const randomSentences = [
  "elephant stomps through the jungle .",
  "a musician composes a symphony elegantly.",
  "the astronaut explores the galaxy fearlessly.",
  "creates a cake skillfully.",
  "the detective solves the mystery quickly.",
  "an athlete trains for the marathon diligently.",
  "the bird .",
  "a scientist discovers a new element excitedly.",
  "the chef prepares a gourmet meal .",
  "the painter creates a vibrant portrait passionately.",
];

let newsentences = randomSentences.sort((a, b) => a.length - b.length);

console.log(newsentences);

// Capitalize the first letter of each sentence

const capitalizedSentences = newsentences.map((newsentences) => {
  return newsentences.charAt(0).toUpperCase() + newsentences.slice(1);
});

console.log(capitalizedSentences);
