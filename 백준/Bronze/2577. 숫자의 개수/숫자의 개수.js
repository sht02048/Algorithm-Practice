const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = Array.from({length: 10}, ((value, index) => 0));

let multified = 1;

for (let i = 0; i < input.length; i++) {
  multified *= Number(input[i]);
}

const stringArr = multified.toString().split("").map(Number);

for (let i = 0; i < stringArr.length; i++) {
  arr[stringArr[i]]++;
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
