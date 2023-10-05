const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [x, y, w, h] = input[0].split(' ').map(Number);
const xTow = w - x;
const yToh = h - y;
const xTo0 = x;
const yTo0 = y;

console.log(Math.min(xTow, xTo0, yToh, yTo0));