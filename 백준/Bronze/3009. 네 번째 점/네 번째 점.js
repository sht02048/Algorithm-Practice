const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const arrX = [];
const arrY = [];

for (let i = 0; i < input.length; i++) {
    arrX[i] = input[i].split(' ').map(Number)[0];
    arrY[i] = input[i].split(' ').map(Number)[1];
}

let answer1 = 0;
let answer2 = 0;
for (let i = 0; i < 3; i++) {
    if (arrX.indexOf(arrX[i]) === arrX.lastIndexOf(arrX[i])) {
        answer1 = arrX[i];
    }
    if (arrY.indexOf(arrY[i]) === arrY.lastIndexOf(arrY[i])) {
        answer2 = arrY[i];
    }
}

console.log(answer1, answer2);