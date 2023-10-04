const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const M = Number(input[1]);
const primes = [];

for (let i = N; i <= M; i++) {
    const num = i;
    let factors = 0;
    for (let j = 1; j <= num; j++) {
        if (num % j === 0) {
            factors++
        }
    }
    if (factors === 2) {
        primes.push(i);
    }
}

if (primes.length === 0) {
    console.log(-1);
} else{
    console.log(primes.reduce((a,b) => a + b, 0));
    console.log(Math.min(...primes));
}