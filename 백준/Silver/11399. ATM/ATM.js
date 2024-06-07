let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b);


let cnt = 0;
let sum = 0;
for (i = 0; i < n; i++) {
  cnt += arr[i];
  sum += cnt;
}
console.log(sum);
