const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 0 ; i < input.length - 1; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    if (y % x === 0 || x % y === 0) {
        if (x % y === 0) {
            console.log('multiple');
        } else {
            console.log('factor');
        }
    } else {
        console.log('neither');
    }
}


