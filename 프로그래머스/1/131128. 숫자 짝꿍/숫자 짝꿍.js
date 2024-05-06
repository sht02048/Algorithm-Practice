function solution(X, Y) {
    const xNumbers = Array.from({ length: 10}, () => 0);
    const yNumbers = Array.from({ length: 10}, () => 0);
    const commonArray = [];
    
    for (x of X) {
        xNumbers[x] += 1;
    }
    
    for (y of Y) {
        yNumbers[y] += 1;
    }
    
    xNumbers.forEach((xValue, index) => {
        const yValue = yNumbers[index];
        
        if (xValue === 0 || yValue === 0) {
            return;
        }
        
        commonArray.push(String(index).repeat(Math.min(xValue, yValue)));
    });
    
    
    if (commonArray.length === 0) return "-1";
    
    const answer = commonArray.reverse().join("");
    
    if (Number(answer) === 0) {
        return "0";
    }
    
    return answer;
}