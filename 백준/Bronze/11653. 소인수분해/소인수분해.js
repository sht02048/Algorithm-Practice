const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0]);
let factor = 2;

while (n > 1) {
    if (n % factor === 0) {
       n = n / factor
        console.log(factor);
    } else {
        factor++;
    }
    if (n < factor) {
        break;
    }
}