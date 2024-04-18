function solution(keymap, targets) {
    const keyboards = {};
    const answer = [];
    
    keymap.forEach((keys) => {
        keys.split("").forEach((key, index) => {
            const letterIndex = index + 1;
            
            if (keyboards[key] === undefined) {
                keyboards[key] = letterIndex;
                return;
            }
            
            if (keyboards[key] > letterIndex) {
                keyboards[key] = letterIndex;
            }
        });
    });
    
    targets.forEach((target) => {
        let keypressCount = 0;
        
        target.split("").forEach((letter) => {
            keypressCount += keyboards[letter];
        });

        
        if (Number.isNaN(keypressCount)) {
            answer.push(-1);
            return;
        }

        answer.push(keypressCount);
    });
    
    return answer;
}