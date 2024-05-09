function solution(s){
    const queue = [];
    
    for (const bracket of s) {
        const firstQueue = queue[0];
        
        if (bracket === "(") {
            queue.push(bracket);
        } else if (bracket === ")" && firstQueue === "(") {
            queue.pop();
        } else {
            return false;
        }
    }
    
    if (queue.length !== 0) {
        return false;
    }
    
    return true;
}