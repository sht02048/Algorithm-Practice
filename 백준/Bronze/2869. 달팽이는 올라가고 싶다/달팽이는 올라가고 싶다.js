const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [a, b, v] = input[0].split(' ').map(Number);

let answer = Math.ceil((v - b) / (a - b));

console.log(answer);