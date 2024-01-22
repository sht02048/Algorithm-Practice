function solution(x, y, n) {
  const queue = [[y, 0]];

  while (queue.length !== 0) {
    // console.log(queue);
    let [currentNumber, count] = queue.shift();
    if (currentNumber === x) {
      return count;
    }

    if (currentNumber / 2 === y || currentNumber / 3 === y || currentNumber - n === y) {
      return count + 1;
    }

    if (currentNumber % 2 === 0) {
      const nextNumber = currentNumber / 2;
      const nextCount = count + 1;
      queue.push([nextNumber, nextCount]);
    }

    if (currentNumber % 3 === 0) {
      const nextNumber = currentNumber / 3;
      const nextCount = count + 1;
      queue.push([nextNumber, nextCount]);
    }

    if (currentNumber - n < y && currentNumber - n > 0) {
      const nextNumber = currentNumber - n;
      const nextCount = count + 1;
      queue.push([nextNumber, nextCount]);
    }
  }

  return -1
}

const result = solution(2, 5 ,4);

console.log(result);
