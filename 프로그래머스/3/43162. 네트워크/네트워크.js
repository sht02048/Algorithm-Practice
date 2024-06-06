function solution(n, computers) {
  if (n === 1) {
    return 1;
  }

  const visitedMap = Array.from({ length: n }, () => new Array(n).fill(false));
  let answer = 0;

  computers.forEach((arr, indexX) => {
    arr.forEach((computer, indexY) => {
      if (computer === 0 || visitedMap[indexX][indexY] === true) return;

      dfs([indexX, indexY], visitedMap, computers);

      answer += 1;
    });
  });

  return answer;
}

function dfs(startPoint, visitedMap, computers) {
  let network = 0;
  const stack = [startPoint];

  while(stack.length > 0) {
    const [x, y] = stack.pop();

    if (visitedMap[x][y] === true) continue;

    visitedMap[x][y] = true;

    if ((y === visitedMap.length - 1 || y  > 0) && visitedMap[x][y - 1] !== true) stack.push([x, y - 1]);
    if (y < visitedMap.length - 1 && visitedMap[x][y + 1] !== true) stack.push([x, y + 1]);
    if (visitedMap[y][x] !== true && computers[x][y] !== 0) {
      stack.push([y, x]);
    };
  }

  return network;
}