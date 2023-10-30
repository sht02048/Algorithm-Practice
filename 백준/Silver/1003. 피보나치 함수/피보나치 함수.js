const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const fibo = {
  0: [0, 0],
  1: [1, 1],
  2: [1, 1],
  3: [1, 2],
};

function getFibo(number) {
  if (number === 0) {
    return [1, 0];
  } else if (number === 1) {
    return [0, 1];
  } else if (number === 2) {
    return [1, 1];
  } else if (number === 3) {
    return [1, 2];
  }

  if (fibo[number]) {
    return fibo[number];
  } else {
    let startNum = 4;
    for (let i = startNum; i <= number; i++) {
      if (!fibo[i]) {
        fibo[i] = [fibo[i - 1][0] + fibo[i - 2][0], fibo[i - 1][1] + fibo[i - 2][1]];
      }
    }
    return fibo[number];
  }
}

for (let i = 1; i < input.length; i++) {
  console.log(getFibo(Number(input[i])).join(" "));
}
