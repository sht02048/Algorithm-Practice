const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const factors = [];
for (let i = 1; i <= N; i++){
    if (N % i === 0) {
        factors.push(i);
    }
}


if (factors.length < K) {
    console.log(0);
} else {
    console.log(factors[K - 1]);
}