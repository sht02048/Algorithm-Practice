const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = Number(input[0]);
let x = 1;
while (x < num) {
    const sum = x.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    if (sum + x === num) {
            console.log(x);
            break;
    }
    x++;
}

if (x === num) {
    console.log(0);
}