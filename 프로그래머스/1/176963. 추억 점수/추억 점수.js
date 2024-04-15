function solution(name, yearning, photo) {
    const answer = [];
    
    const scores = {};
    
    name.forEach((value, index) => {
        scores[value] = yearning[index];
    });
    
    photo.forEach((names, index) => {
        names.forEach((value) => {
            if (answer[index] === undefined) {
                answer[index] = 0;
            }
            
            if (scores[value] !== undefined) {
              answer[index] += scores[value];    
            }
        })
    })
    
    return answer;
}