function solution(sizes) {
    let biggestLeft = 0;
    let biggestRight = 0;
    
    const mapped = sizes.map((size) => {
        const [left, right] = size;
        
        if (left < right) {
            if (left > biggestRight) {
                biggestRight = left;
            }
            
            if (right > biggestLeft) {
                biggestLeft = right;
            }
            
            return [right, left];
        }
        
        if (right > biggestRight) {
            biggestRight = right;
        }
        
        if (left > biggestLeft) {
            biggestLeft = left;
        }
        
        return size;
    })
    
    return biggestLeft * biggestRight;
}