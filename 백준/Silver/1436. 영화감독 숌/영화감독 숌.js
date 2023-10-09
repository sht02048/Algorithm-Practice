const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = Number(input);
let answer = 666;
let cnt = 0;
while(true) {
    const doom = answer.toString();
    if (doom.includes('666')) {
        cnt++;
    }
    if(cnt === num) {
        console.log(answer);
        break;
    }
    answer++;
}
