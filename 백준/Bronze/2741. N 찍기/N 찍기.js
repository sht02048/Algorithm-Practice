const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = Number(input[0]);

let answer = "";

for (let i = 1; i <= input; i++) {
  answer += i + "\n";
}

console.log(answer);