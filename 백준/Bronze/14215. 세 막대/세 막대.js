const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = input[0].split(' ').map(Number).sort((a,b) => b - a, 0);

if (arr[0] >= arr[1] + arr[2]) {
    arr[0] = (arr[1] + arr[2]) - 1;
}

console.log(arr[0] + arr[1] + arr[2]);
