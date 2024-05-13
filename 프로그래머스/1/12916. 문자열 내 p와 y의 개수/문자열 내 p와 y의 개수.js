function solution(s) {
    let countP = 0;
    let countY = 0;
    const lowerS = s.toLowerCase();
    
    for (const string of lowerS) {
        if (string === "p") {
            countP += 1;
        } else if (string === "y") {
            countY += 1;
        }
    }
    
    if (countP === countY) {
        return true;
    }
    
    return false;
}