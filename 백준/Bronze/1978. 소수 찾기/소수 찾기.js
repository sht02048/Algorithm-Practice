const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = input[1].split(' ').map(Number);
let answer = 0;

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let factors = 0;
    for (let j = 1; j <= num; j++) {
        if (num % j  === 0) {
            factors++;
        }
    }
    if (factors === 2) {
        answer++;
    }
}

console.log(answer);