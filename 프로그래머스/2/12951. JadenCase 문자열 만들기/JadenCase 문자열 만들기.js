function solution(s) {
    const words = s.split(" ");
    let answer = "";
    words.forEach((word, index) => {
        if (word === "") {
            answer += " ";
            return;
        }
        
        if (index !== 0) {
            answer += " ";
        }
        
        const lowercaseWord = word.toLowerCase();
        
        if (isNaN(word[0])) {
            const changedWord = lowercaseWord.replace(lowercaseWord[0], lowercaseWord[0].toUpperCase());
            answer += changedWord;
            return;
        }
        
        answer += lowercaseWord;
    });
    
    return answer;
}