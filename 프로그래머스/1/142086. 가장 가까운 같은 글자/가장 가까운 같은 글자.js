function solution(s) {
    const arr = s.split("");
    const wordsLocation = {};
    const answer = [];
    
    arr.forEach((word, index) => {
        const location = wordsLocation[word];
        
        if (location !== undefined) {
            answer.push(index - location);
            wordsLocation[word] = index;
            return;
        }
        
        answer.push(-1);
        wordsLocation[word] = index;
    });
    
    return answer;
}