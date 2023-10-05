const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const x = [];
const y = [];

for (let i = 1; i < input.length; i++) {
    x[i - 1] = input[i].split(' ').map(Number)[0];
    y[i - 1] = input[i].split(' ').map(Number)[1];
}

const width = Math.max(...x) - Math.min(...x);
const height = Math.max(...y) - Math.min(...y);

console.log(width * height);