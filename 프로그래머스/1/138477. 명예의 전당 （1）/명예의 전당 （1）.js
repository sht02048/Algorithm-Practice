function solution(k, score) {
    const answer = [];
    const hallOfFame = []
    
    for (let i = 0; i < score.length; i += 1) {
        const currentScore = score[i];

        hallOfFame.push(currentScore);
        hallOfFame.sort((a, b) => b - a);
        
        if (hallOfFame.length > k) {
            hallOfFame.pop();
        }
        
        const lowestScore = hallOfFame[hallOfFame.length - 1];

        answer.push(lowestScore);
    }
    
    return answer;
}