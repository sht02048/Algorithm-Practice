const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');


const holdingCards = new Set(input[1].split(" ").map(Number));
const cards = input[3].split(" ").map(Number);
const results = [];

for (let i = 0; i < cards.length; i++) {
  if (holdingCards.has(cards[i])) {
    results.push(1);
  } else {
    results.push(0);
  }
}

console.log(results.join(" "));

