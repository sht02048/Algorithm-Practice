const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(" ").map(Number);
const stringArr = [];
let stringSet = [];
let count = 0;

for (let i = 1; i <= N; i++) {
  stringSet.push(input[i]);
}

for (let i = N + 1; i < N + M + 1; i++) {
  stringArr.push(input[i]);
}

stringSet = new Set(stringSet);

for (let i = 0; i < stringArr.length; i++) {
  if (stringSet.has(stringArr[i])) {
    count++;
  }
}

console.log(count);
