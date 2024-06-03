function solution(queue1, queue2) {
  let minAnswer = -1;
  let queue1Idx = 0;
  let queue2Idx = 0;
  let queue1Sum = queue1.reduce((acc, cur) => acc + cur);
  let queue2Sum = queue2.reduce((acc, cur) => acc + cur);
  const queue1Length = queue1.length;
  const queue2Length = queue2.length;
  const targetSum = ( queue1Sum + queue2Sum ) / 2;

  if (targetSum % 1 !== 0) {
    return minAnswer;
  }

  for (let i = 1; i <= queue1Length + queue2Length + 5; i += 1) {
    if (queue1Sum === targetSum) {
      minAnswer = i - 1;
      break;
    }

      if (queue1Sum > targetSum) {
        const queue1Element = queue1[queue1Idx];
        queue1Sum -= queue1Element;
        queue2.push(queue1Element);
        queue1Idx += 1;
      } else {
        const queue2Element = queue2[queue2Idx];
        queue1Sum += queue2Element;
        queue1.push(queue2Element);
        queue2Idx += 1;
      }
  }

  return minAnswer;
}