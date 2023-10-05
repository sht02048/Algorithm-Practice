const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const target = input[0].split(' ').map(Number)[1];
const arr = input[1].split(' ').map(Number);


function blackJack () {
let answer = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                const sum = arr[i] + arr[j] + arr[k];
                if (answer < sum && sum <= target) {
                    if (sum === target) {
                    return sum;
                    } else {
                    answer = sum;
                    }
                }
            }
        }
    }
    return answer;
}

console.log(blackJack());
