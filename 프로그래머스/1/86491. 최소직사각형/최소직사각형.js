function solution(sizes) {
    let biggestLeft = 0;
    let biggestRight = 0;
    
    sizes.forEach((size) => {
        const [left, right] = size;
        
        if (left < right) {
            if (left > biggestRight) {
                biggestRight = left;
            }
            
            if (right > biggestLeft) {
                biggestLeft = right;
            }
            
            return;
        }
        
        if (right > biggestRight) {
            biggestRight = right;
        }
        
        if (left > biggestLeft) {
            biggestLeft = left;
        }
        
        return;
    });
    
    return biggestLeft * biggestRight;
}