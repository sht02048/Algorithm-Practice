const { log } = require('console');
let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const stack = [];
let answer = "";

function push(x) {
  stack.push(x);
}

function pop() {
  if (stack.length === 0) {
    return -1;
  }

  return stack.pop();
}

function size(){
  return stack.length;
}

function empty() {
  if (stack.length === 0) {
    return 1;
  }

  return 0;
}

function top() {
  if (stack.length === 0) {
    return -1;
  }

  return stack[stack.length- 1];
}

const functionList = {
  push,
  pop,
  size,
  empty,
  top,
}

for (let i = 1; i < input.length; i++) {
  const currentInput = input[i].split(" ");

  if (currentInput.length === 1) {
    answer += (functionList[currentInput]() + "\n");
  } else {
    functionList[currentInput[0]](currentInput[1]);
  }
}

console.log(answer);