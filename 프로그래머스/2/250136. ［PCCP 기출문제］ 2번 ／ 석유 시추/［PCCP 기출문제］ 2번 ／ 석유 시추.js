function solution(land) {
  const oilInfos = [];
  let farLeft = 501;
  let farRight = -1;
  let maxReserve = 0;

  land.forEach((arr, xIndex) => {
      arr.forEach((value, yIndex) => {
        if (value === 0) {
          return;
        }

         const oilInfo = search([xIndex, yIndex], land);
         const [_, left, right] = oilInfo;
         oilInfos.push(oilInfo);

         if (left < farLeft) {
          farLeft = left;
         }

         if (right > farRight) {
          farRight = right;
         }
      });
    });


    for (let i = farLeft; i <= farRight; i += 1) {
      let oilReserve = 0;

      oilInfos.forEach(([oil, left, right]) => {
        if (i >= left && i <= right) {
          oilReserve += oil;
        }
      });

      if (oilReserve > maxReserve) {
        maxReserve = oilReserve;
      }
    }

    return maxReserve;
}

function search(n, land) {
  let oilCount = 0;
  const stack = [n];
  const directions = {
      top: [-1, 0],
      bottom: [1, 0],
      left: [0, -1],
      right: [0 ,1]
  };
  const maxX = land.length - 1;
  const maxY = land[0].length - 1;
  let farLeft = 501;
  let farRight = -1;

  while (stack.length > 0) {
      const [currentX, currentY] = stack.pop();

      if (land[currentX][currentY] === 0) {
          continue;
      }


      for (const direction in directions) {
          const arr = directions[direction];
          const nextX = currentX + arr[0];
          const nextY = currentY + arr[1];

          if (nextX < 0 ||
              nextX > maxX ||
              nextY < 0 ||
              nextY > maxY
             ) {
              continue;
          }

          stack.push([nextX, nextY]);
      }

      if (currentY < farLeft) {
        farLeft = currentY;
      } 
      if (currentY > farRight) {
        farRight = currentY
      }


      oilCount += 1;
      land[currentX][currentY] = 0;
  }

  return [oilCount, farLeft + 1, farRight + 1];
}
