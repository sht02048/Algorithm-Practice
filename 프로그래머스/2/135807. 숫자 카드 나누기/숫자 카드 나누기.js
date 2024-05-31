// 유클리드 호제법 재귀호출
const uclid = (a, b) => {
  if (b === 0) {
    return a;
  }

  return uclid(b, a % b);
};

// 최대공약수 구하기
const getGCD = (arr) => {
  let gcd;

  for (let i = 0; i < arr.length - 1; i++) {
    const curr = gcd ?? arr[i];
    const next = arr[i + 1];
    const uclidResult = curr > next ? uclid(curr, next) : uclid(next, curr);

    if (uclidResult > 1) {
      gcd = uclidResult;
    } else {
        gcd = 1;
        break;
    }
  }

  return gcd;
};

function solution(arrayA, arrayB) {
  let result = 0;

  const gcdA = arrayA.length > 1 ? getGCD(arrayA) : arrayA[0];
  if (gcdA >= 1 && arrayB.every((num) => num % gcdA !== 0) && gcdA >= result) {
    result = gcdA;
  }

  const gcdB = arrayB.length > 1 ? getGCD(arrayB) : arrayB[0];
  if (gcdB >= 1 && arrayA.every((num) => num % gcdB !== 0) && gcdB >= result) {
    result = gcdB;
  }

  return result;
}

