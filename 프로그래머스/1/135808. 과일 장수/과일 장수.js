function solution(k, m, score) {
    const sortedScore = [...score].sort((a, b) => b - a);
    let answer = 0;
    let lowestNumber = 10;
    let maxNumber = 0;
    
    console.log(sortedScore)
    
    sortedScore.forEach((number) => {
        if (lowestNumber > number ) {
            lowestNumber = number;
        }
        
        maxNumber += 1;
        
        if (maxNumber === m) {
           answer += (lowestNumber * maxNumber);
           lowestNumber = 10;
           maxNumber = 0;

           return;
       } 
    });
    
    return answer;
}