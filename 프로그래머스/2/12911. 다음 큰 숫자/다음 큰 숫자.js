function solution(n, originalCount = null) {
    const nextN = n + 1;
    let countN = originalCount;
    
    
    if (countN === null) {
        const binaryN = n.toString(2);
        countN = 0;
        
        for (const string of binaryN) {
        if (string === "1") {
            countN += 1;
        }
    }
    }
    
    const binaryNextN = nextN.toString(2);
    let countNextN = 0;
    

    
    for (const string of binaryNextN) {
        if (string === "1") {
             countNextN += 1;
        }
    }
    
    // console.log(binaryN, binaryNextN)
  
    if (countN !== countNextN) {

        return solution(nextN, countN);
    }
    
    return nextN;
}