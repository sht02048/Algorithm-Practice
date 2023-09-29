const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = Array.from(Array(100), () => new Array(100).fill(0));
let count = 0;
for (let i = 1; i < input.length; i++){
    const [x, y] = input[i].split(' ').map(Number);
    for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 10; k++) {
            if (arr[x + j][y + k] !== 0){
                continue;
            }
            arr[x + j][y + k] = 1;
            count++;
        }
    }
}
console.log(count);