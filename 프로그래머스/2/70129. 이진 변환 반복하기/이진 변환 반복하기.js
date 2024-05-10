function solution(s, zeros = 0, count = 1) {
  const sWithoutZero = s.replaceAll("0", "");
  const length = sWithoutZero.length;
  const binary = length.toString(2);
  zeros += s.length - sWithoutZero.length;

  if (binary !== "1") {
      count += 1;
      return solution(binary, zeros, count);
  }

  return [count, zeros];
}