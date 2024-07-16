let fs = require('fs');
const { stringify } = require('querystring');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, k] = input[0].split(' ').map(Number);
let cnt = 1;
let flag = false;

while (n <= k) {
  if (n == k) {
    flag = true;
    break;
  }
  if (k % 2 == 0) {
    k = parseInt(k / 2);
  } else if (k % 10 == 1) {
    k = parseInt(k / 10);
  } else break;
  cnt++;
}
if (flag) {
  console.log(cnt);
} else {
  console.log(-1);
}
