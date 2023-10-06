const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [a, b, c, d, e, f] = input[0].split(' ').map(Number);
let flag = true
    for (let i = -999; i < 1000; i++) {
        for (let j = -999; j < 1000; j++) {
            if (a * i + b * j === c && d * i + e * j === f){
                console.log(i, j);
                flag = false;
                break;
            }
        }
        if (!flag) {
            break;
        }
    }

