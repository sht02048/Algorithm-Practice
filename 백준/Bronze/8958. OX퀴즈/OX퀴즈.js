const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 1; i < input.length; i++) {
  const ox = input[i].split(" ");
  let score = 0;
  let o = 1;

  for (let j = 0; j < ox[0].length; j++) {
    if (ox[0][j] === "O") {
      score += o;
      o++;
    } else {
      o = 1;
    }
  }

  console.log(score);
}
