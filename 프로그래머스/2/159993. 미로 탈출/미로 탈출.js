function solution(maps) {
    const nestedArray = maps.map((str) => str.split(""));
    const [S, L, E] = getLocations(nestedArray);
    const distanceStoL = findShortestWay(S, L, nestedArray);

    if (distanceStoL === null) {
        return -1;
    }

    const distanceLtoE = findShortestWay(L, E, nestedArray);

    if (distanceLtoE === null) {
        return -1;
    }

    return distanceStoL + distanceLtoE;
}

function findShortestWay(startPoint, endPoint, maps) {
    const queue = [[startPoint[0], startPoint[1], 0]];
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const maxX = maps.length - 1;
    const maxY = maps[0].length - 1;
    const visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(false));

    while (queue.length > 0) {
        const [currentX, currentY, distance] = queue.shift();

        if (visited[currentX][currentY]) {
            continue;
        }

        visited[currentX][currentY] = true;

        for (const direction of directions) {
            const nextX = currentX + direction[0];
            const nextY = currentY + direction[1];

            if (nextX < 0 || nextX > maxX || nextY < 0 || nextY > maxY) {
                continue;
            }

            if (maps[nextX][nextY] === "X" || visited[nextX][nextY]) {
                continue;
            }

            if (nextX === endPoint[0] && nextY === endPoint[1]) {
                return distance + 1;
            }

            queue.push([nextX, nextY, distance + 1]);
        }
    }

    return null;
}

function getLocations(maps) {
    let sLocation = "";
    let lLocation = "";
    let eLocation = "";

    maps.forEach((arr, xIndex) => {
        arr.forEach((str, yIndex) => {
            if (str === "S") {
               sLocation = [xIndex, yIndex];
            } else if (str === "L") {
                lLocation = [xIndex, yIndex];
            } else if (str === "E") {
                eLocation = [xIndex, yIndex];
            }
        });
    });

    return [sLocation, lLocation, eLocation];
}
