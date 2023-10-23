const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = [];

for (let i = 1; i < input.length; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);

let result = ""

for (let i = 0; i < arr.length; i++) {
  result += arr[i] + "\n";
}

console.log(result);