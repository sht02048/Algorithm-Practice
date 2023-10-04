const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < input.length -1; i++) {
    const num = Number(input[i]);
    const factors = [];
    for (let j = 1; j < num; j++) {
        if (num % j === 0) {
            factors.push(j);
        }
    }
    if (factors.reduce((a,b) => a + b, 0) === num) {
        let answer = `${num} =`;
        for (let j = 0; j < factors.length; j++) {
            if (j === factors.length - 1){
                answer += ` ${factors[j]}`
            } else {
                answer += ` ${factors[j]} +`;
            }
        }
        console.log(answer);
    } else {
        console.log(`${num} is NOT perfect.`);
    }
}