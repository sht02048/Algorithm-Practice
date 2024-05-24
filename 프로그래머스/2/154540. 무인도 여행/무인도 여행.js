function solution(maps) {
    const metrics = maps.map(map => map.split("").map((value) => value === "X" ? value : Number(value)));
    const answer = [];
    
    metrics.forEach((arr, xIndex) => {
        arr.forEach((value, yIndex) => {
            if (value === "X") {
                return;
            }
            
            const landNumber = bfs([xIndex, yIndex], metrics);
            answer.push(landNumber)
        });
    });
    
    if (answer.length === 0) {
        return [-1];
    }
    
    answer.sort((a, b) => a - b)

    return answer;
}

function bfs(startPoint, maps) {
    let landCount = 0;
    const maxX = maps.length - 1;
    const maxY = maps[0].length - 1;
    const stack = [startPoint];
    const directions = [[-1, 0], [1, 0], [0, 1], [0, -1],];

    while (stack.length > 0) {
        const [currentX, currentY] = stack.pop();
        
        if (maps[currentX][currentY] === "X") {
            continue;
        }
        
        landCount += maps[currentX][currentY];
        maps[currentX][currentY] = "X";
        
        for (const direction of directions) {
            const nextX = currentX + direction[0];
            const nextY = currentY + direction[1];
            
            if (
                nextX < 0 ||
                nextX > maxX ||
                nextY < 0 ||
                nextY > maxY
            ) {
                continue;
            }
            
            stack.push([nextX, nextY]);
        }
    }
    
    
    return landCount;
}

