function solution(land) {
    const oilByLand = new Array(land[0].length).fill(0);
    const visitArray = Array.from({ length: land.length }, () => new Array(land[0].length).fill(false));
    const maxX = land.length - 1;
    const maxY = land[0].length - 1;
    
    land.forEach((row, indexX) => {
        row.forEach((col, indexY) => {
                      if (visitArray[indexX][indexY] || land[indexX][indexY] === 0) return;
            
            const { oilCount, oilStart, oilEnd } = dfs({ currentX: indexX, currentY: indexY});
            
            if (oilCount === 0) return;
            
            for (let i = oilStart; i <= oilEnd; i++) {
                oilByLand[i] += oilCount;
            }
        });
    });
    
    function dfs({ currentX, currentY }) {
       const stack = [[currentX, currentY]];
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        let oilCount = 1; // 처음 위치도 포함해야 함
        let oilStart = currentY; // 초기 위치 포함
        let oilEnd = currentY;   // 초기 위치 포함
        
        visitArray[currentX][currentY] = true; // 초기 위치 방문으로 설정
        
        while(stack.length > 0) {
            const [currentX, currentY] = stack.pop();
            
            for (const direction of directions) {
                const nextX = currentX + direction[0];
                const nextY = currentY + direction[1];
                
                if (nextX < 0 || nextY < 0 || nextX > maxX || nextY > maxY) continue;
                if (visitArray[nextX][nextY]) continue;
                if (land[nextX][nextY] === 0) continue;
                
                if (oilStart > nextY) oilStart = nextY;
                if (oilEnd < nextY) oilEnd = nextY;
                
                stack.push([nextX, nextY]);
                visitArray[nextX][nextY] = true;
                oilCount += 1;
            }
        }
        
        return { oilCount, oilStart, oilEnd }
    }
    
    return Math.max(...oilByLand);
}
