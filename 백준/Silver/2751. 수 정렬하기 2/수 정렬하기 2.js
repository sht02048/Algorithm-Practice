const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let index = Number(input[0]);

let arr = [];

for (let i = 1; i <= index; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);
let answer = '';
for (let i = 0; i < arr.length; i++) {
  if (i != arr.length - 1) {
    answer += arr[i] + '\n';
  } else {
    answer += arr[i];
  }
}

console.log(answer);
