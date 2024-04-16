function solution(n, m, section) {
    let answer = 0;
    const walls = Array.from({ length: n }, (_, wallIndex) => {
        for (let i = 0; i < section.length; i += 1) {
            if (wallIndex === section[i] - 1) {
                return true;
            }
        }
        
        return false;
    })

    section.forEach((sectionNumber) => {
        if (!walls[sectionNumber - 1]) {
            return;
        }
        
        for (let i = 0; i < m; i += 1) {
            walls[sectionNumber - 1 + i] = false;
        }
        
        answer += 1;
    });
    
 
 return answer;
}