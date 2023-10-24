const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const set = new Set(input[1].split(" "));
const arr = input[3].split(" ");

let reuslt = "";

for (let i = 0; i < arr.length; i++) {
  if (set.has(arr[i])) {
    reuslt += "1" + "\n";
  } else {
    reuslt += "0" + "\n";
  }
}

console.log(reuslt);