function solution(board) {
  const { arrayBoard, rLocation } = initializeBoard(board);
  const result = bfs(rLocation, arrayBoard);

  return result;
}

function bfs(location, board) {
  const queue = [[...location, 0]];
  const directions = {
    top: [-1, 0],
    bottom: [1, 0],
    left: [0, -1],
    right: [0, 1],
  };
  const visited = new Set();
  visited.add(location.toString());

  while (queue.length > 0) {
    const [x, y, count] = queue.shift();

    for (const direction in directions) {
      const nextDirection = directions[direction];
      const nextLocation = moveToEnd([x, y], board, nextDirection);
      const [nextX, nextY] = nextLocation;
      const nextKey = nextLocation.toString();

      if (!visited.has(nextKey)) {
        if (board[nextX][nextY] === "G") {
          return count + 1;
        }
        visited.add(nextKey);
        queue.push([...nextLocation, count + 1]);
      }
    }
  }
  return -1;
}

function moveToEnd(location, board, direction) {
  const [x, y] = location;
  const maxX = board.length - 1;
  const maxY = board[0].length - 1;
  const [addX, addY] = direction;
  let nextX = x;
  let nextY = y;

  while (true) {
    if (
      nextX + addX > maxX ||
      nextX + addX < 0 ||
      nextY + addY > maxY ||
      nextY + addY < 0 ||
      board[nextX + addX][nextY + addY] === "D"
    ) {
      return [nextX, nextY];
    }

    nextX += addX;
    nextY += addY;
  }
}

function initializeBoard(board) {
  let rLocation = [];
  const arrayBoard = board.map((row, indexX) => {
    const splitRow = row.split("");
    const indexY = splitRow.indexOf("R");
    if (indexY !== -1) {
      rLocation = [indexX, indexY];
    }
    return splitRow;
  });
  return { arrayBoard, rLocation };
}